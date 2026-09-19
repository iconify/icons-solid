import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/z-i7_mbxb.css';
import '../../css/s/s4-xrlbno.css';
import '../../css/o/oc935cbxy.css';
import '../../css/k/k8i2b7b5m.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="z-i7_mbxb"/><path class="s4-xrlbno"/><path class="oc935cbxy"/><path class="k8i2b7b5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ki"} {...others} />);
}

export default Component;
