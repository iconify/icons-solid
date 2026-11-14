import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bw_371bwi.css';
import '../../css/q/quspsqbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="bw_371bwi"/><path class="quspsqbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:at-sign"} {...others} />);
}

export default Component;
