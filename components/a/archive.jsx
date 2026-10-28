import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rjf8g8byq.css';
import '../../css/o/oo4uf-24y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="rjf8g8byq"/><path class="oo4uf-24y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:archive"} {...others} />);
}

export default Component;
