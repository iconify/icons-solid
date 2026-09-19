import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqq4spbzl.css';
import '../../css/e/ej3ft6qzs.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pqq4spbzl"/><path class="ej3ft6qzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:weightlifitng"} {...others} />);
}

export default Component;
