import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwjmshbof.css';
import '../../css/p/pmux4jffc.css';
import '../../css/c/c0ps_ubnv.css';
import '../../css/u/u4bf41b-s.css';
import '../../css/o/oc5vzqbcn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPlMXeqsm"><g class="ft5dv1b6b"><circle class="lwjmshbof"/><path class="pmux4jffc"/><circle class="c0ps_ubnv"/><circle class="u4bf41b-s"/><path class="oc5vzqbcn"/></g></mask></defs><path mask="url(#SVGPlMXeqsm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:koala-bear"} {...others} />);
}

export default Component;
