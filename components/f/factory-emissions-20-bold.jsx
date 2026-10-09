import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzjn3zb4d.css';
import '../../css/l/li792gxac.css';
import '../../css/p/p2yqjtb5v.css';
import '../../css/e/eqj3blpeq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zzjn3zb4d"/><path class="li792gxac"/><path class="p2yqjtb5v"/><path class="eqj3blpeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-emissions-20-bold"} {...others} />);
}

export default Component;
