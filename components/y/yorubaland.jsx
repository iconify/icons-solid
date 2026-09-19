import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rn10pccup.css';
import '../../css/t/ti6ugvdlu.css';
import '../../css/x/xfsagwjni.css';
import '../../css/z/zbpt045kk.css';
import '../../css/d/dbs0fvbvt.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rn10pccup"/><path class="ti6ugvdlu"/><path class="xfsagwjni"/><path class="zbpt045kk"/><path class="dbs0fvbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:yorubaland"} {...others} />);
}

export default Component;
