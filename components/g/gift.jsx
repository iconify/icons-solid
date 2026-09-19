import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dfg4jry2k.css';
import '../../css/l/lltwtebwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="dfg4jry2k"/><path class="lltwtebwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:gift"} {...others} />);
}

export default Component;
