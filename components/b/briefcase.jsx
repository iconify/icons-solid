import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g55efo6fc.css';
import '../../css/i/ihk0gabkp.css';
import '../../css/u/uraiyuf6y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="g55efo6fc"/><path class="ihk0gabkp"/><path class="uraiyuf6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:briefcase"} {...others} />);
}

export default Component;
