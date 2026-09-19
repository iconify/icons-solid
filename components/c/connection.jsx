import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rby7vyvff.css';
import '../../css/g/gkws3_7ir.css';
import '../../css/z/z6uqbqdji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rby7vyvff"/><path class="gkws3_7ir"/><path class="z6uqbqdji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:connection"} {...others} />);
}

export default Component;
