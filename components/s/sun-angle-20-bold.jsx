import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/layun2cdm.css';
import '../../css/c/cwapoj_fx.css';
import '../../css/m/m2q42tstp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="layun2cdm"/><path class="cwapoj_fx"/><path class="m2q42tstp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-angle-20-bold"} {...others} />);
}

export default Component;
