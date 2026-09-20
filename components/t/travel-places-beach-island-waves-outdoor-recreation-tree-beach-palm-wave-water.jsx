import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gmjq-hxzi.css';
import '../../css/d/dfkswxblu.css';
import '../../css/m/mdq_zveie.css';
import '../../css/d/dy-iqbcva.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gmjq-hxzi"/><path class="dfkswxblu"/><path class="mdq_zveie"/><path class="dy-iqbcva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water"} {...others} />);
}

export default Component;
