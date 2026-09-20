import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iee-akbkn.css';
import '../../css/o/o10soq-vv.css';
import '../../css/m/mi28tkziw.css';
import '../../css/l/l56cuebno.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="iee-akbkn"/><path class="o10soq-vv"/><path class="mi28tkziw"/><path class="l56cuebno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-genetics"} {...others} />);
}

export default Component;
