import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/v41mbxidg.css';
import '../../css/v/viyqa3bvl.css';
import '../../css/b/bjt40onla.css';
import '../../css/y/ynhcf99lc.css';
import '../../css/g/g4qd3ha6l.css';
import '../../css/h/hkec3ob7i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="v41mbxidg"/><rect class="viyqa3bvl"/><rect class="bjt40onla"/><rect class="ynhcf99lc"/><rect class="g4qd3ha6l"/><path class="hkec3ob7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:anchor-one"} {...others} />);
}

export default Component;
