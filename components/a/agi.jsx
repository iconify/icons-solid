import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj-xp5bcy.css';
import '../../css/y/ym37o3bys.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mj-xp5bcy"/><path class="ym37o3bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:agi"} {...others} />);
}

export default Component;
