import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz9d1hbuk.css';
import '../../css/f/fa9p88bws.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="oz9d1hbuk"/><path class="fa9p88bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-bracket-end"} {...others} />);
}

export default Component;
