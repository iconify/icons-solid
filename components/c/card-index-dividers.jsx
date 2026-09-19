import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex2q5ac-h.css';
import '../../css/q/qx-gtmbtz.css';
import '../../css/w/wchna4n6h.css';
import '../../css/p/pj97ij9re.css';
import '../../css/d/dktgzpbmg.css';
import '../../css/l/l8c_gdcto.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ex2q5ac-h"/><path class="qx-gtmbtz"/><path class="wchna4n6h"/><path class="pj97ij9re"/><path class="dktgzpbmg"/><path class="l8c_gdcto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:card-index-dividers"} {...others} />);
}

export default Component;
