import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf59xfbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vf59xfbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lamp-outline"} {...others} />);
}

export default Component;
