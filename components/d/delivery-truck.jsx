import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jn1bq4b3o.css';
import '../../css/r/ro85quuro.css';
import '../../css/l/lopkaybnz.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jn1bq4b3o"/><path class="ro85quuro"/><path class="lopkaybnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:delivery-truck"} {...others} />);
}

export default Component;
