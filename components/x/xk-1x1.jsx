import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4-uf1bww.css';
import '../../css/v/voawabbjg.css';
import '../../css/t/tcf_pkbva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r4-uf1bww"/><path class="voawabbjg"/><path class="tcf_pkbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:xk-1x1"} {...others} />);
}

export default Component;
