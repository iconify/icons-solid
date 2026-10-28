import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r_txeplml.css';
import '../../css/o/orvpyybli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="r_txeplml"/><path class="orvpyybli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:desktop"} {...others} />);
}

export default Component;
