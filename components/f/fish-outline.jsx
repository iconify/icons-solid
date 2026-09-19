import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di3p_6bnk.css';
import '../../css/t/t8wo_rv6h.css';
import '../../css/v/vkmkxtqch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="di3p_6bnk"/><circle class="t8wo_rv6h"/><path class="vkmkxtqch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:fish-outline"} {...others} />);
}

export default Component;
