import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt30kgbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nt30kgbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-empty-filled"} {...others} />);
}

export default Component;
