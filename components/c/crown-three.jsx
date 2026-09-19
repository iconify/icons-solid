import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/j/jghrocalp.css';
import '../../css/p/pn48gtbgw.css';
import '../../css/w/wiuhzdagt.css';
import '../../css/u/uj0e2ibws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><path class="jghrocalp"/><circle class="pn48gtbgw"/><circle class="wiuhzdagt"/><circle class="uj0e2ibws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:crown-three"} {...others} />);
}

export default Component;
