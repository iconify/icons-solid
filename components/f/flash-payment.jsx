import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kkzhfn1-i.css';
import '../../css/o/o5g359bjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="kkzhfn1-i"/><path class="o5g359bjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flash-payment"} {...others} />);
}

export default Component;
