import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-vi7nafh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-vi7nafh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-multiple-outline"} {...others} />);
}

export default Component;
