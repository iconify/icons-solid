import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufl2bny3v.css';
import '../../css/e/eay9adclz.css';
import '../../css/t/tf2yhvbfm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ufl2bny3v"/><path class="eay9adclz"/><path class="tf2yhvbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ballot-box-20-bold"} {...others} />);
}

export default Component;
