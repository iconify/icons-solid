import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-7qfebjm.css';
import '../../css/f/ff0-2zv2c.css';
import '../../css/e/egip2ibxz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t-7qfebjm"/><path class="ff0-2zv2c"/><path class="egip2ibxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-holder-20"} {...others} />);
}

export default Component;
