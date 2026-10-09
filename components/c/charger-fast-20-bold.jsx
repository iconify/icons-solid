import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r__2x3s5d.css';
import '../../css/c/cjbp44b0v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r__2x3s5d"/><path class="cjbp44b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fast-20-bold"} {...others} />);
}

export default Component;
