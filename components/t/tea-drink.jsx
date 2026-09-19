import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hk8hgpbxp.css';
import '../../css/j/jhzfp4b_z.css';
import '../../css/m/mi7jg8b-u.css';
import '../../css/t/txpk_4byv.css';
import '../../css/j/jvsfxbclw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="hk8hgpbxp"/><path class="jhzfp4b_z"/><path class="mi7jg8b-u"/><path class="txpk_4byv"/><path class="jvsfxbclw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tea-drink"} {...others} />);
}

export default Component;
