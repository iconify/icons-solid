import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uabfcuuto.css';
import '../../css/p/pg0nswt9c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uabfcuuto"/><path class="pg0nswt9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ski-lift-20-bold"} {...others} />);
}

export default Component;
