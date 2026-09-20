import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi0mne.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi0mne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:circle"} {...others} />);
}

export default Component;
