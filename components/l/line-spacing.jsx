import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe3j86vbb.css';
import '../../css/i/i8b66go_s.css';
import '../../css/v/vrmdo4bib.css';
import '../../css/i/i771m-bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pe3j86vbb"/><path class="i8b66go_s"/><path class="vrmdo4bib"/><path class="i771m-bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:line-spacing"} {...others} />);
}

export default Component;
