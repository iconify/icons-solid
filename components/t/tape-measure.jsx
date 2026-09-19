import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pmx9gpn_z.css';
import '../../css/q/qew11iivt.css';
import '../../css/f/fdat7jbwr.css';
import '../../css/s/s9930ab6y.css';
import '../../css/y/ywcrk1zoh.css';
import '../../css/d/dtiw4468k.css';
import '../../css/p/p3ze52iit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="pmx9gpn_z"/><path class="qew11iivt"/><rect class="fdat7jbwr"/><circle class="s9930ab6y"/><path class="ywcrk1zoh"/><path class="dtiw4468k"/><path class="p3ze52iit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tape-measure"} {...others} />);
}

export default Component;
