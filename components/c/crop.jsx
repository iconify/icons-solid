import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eaxi5hyrn.css';
import '../../css/t/th6mucbup.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="eaxi5hyrn"/><path class="th6mucbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crop"} {...others} />);
}

export default Component;
