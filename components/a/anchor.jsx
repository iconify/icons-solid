import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/esdt4kmhi.css';
import '../../css/x/xwz_pkbwt.css';
import '../../css/c/cvrgy9bnd.css';
import '../../css/h/hwhg44ber.css';
import '../../css/i/isauebbdi.css';
import '../../css/y/yn0n5y53m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="esdt4kmhi"/><path class="xwz_pkbwt"/><path class="cvrgy9bnd"/><path class="hwhg44ber"/><path class="isauebbdi"/><path class="yn0n5y53m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:anchor"} {...others} />);
}

export default Component;
