import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01dflzvf.css';
import '../../css/k/kk93h00zz.css';
import '../../css/g/gdnaw35gw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w01dflzvf"/><path class="kk93h00zz"/><path class="gdnaw35gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-histogram-20-bold"} {...others} />);
}

export default Component;
