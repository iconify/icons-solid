import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsku-rbch.css';
import '../../css/i/in_k0mbzy.css';
import '../../css/d/dc6crytza.css';
import '../../css/m/mndorw7al.css';
import '../../css/c/caf4nbbbt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vsku-rbch"/><path class="in_k0mbzy"/><path class="dc6crytza"/><path class="mndorw7al"/><path class="caf4nbbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floating-wind-20-bold"} {...others} />);
}

export default Component;
