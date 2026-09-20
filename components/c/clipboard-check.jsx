import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qcsv5xbnp.css';
import '../../css/a/abgf2mrlj.css';
import '../../css/q/qunn4grlt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qcsv5xbnp"/><path class="abgf2mrlj"/><path class="qunn4grlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:clipboard-check"} {...others} />);
}

export default Component;
