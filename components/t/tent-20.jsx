import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct17tacjl.css';
import '../../css/l/l9yqfvb5c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ct17tacjl"/><path class="l9yqfvb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tent-20"} {...others} />);
}

export default Component;
