import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukg4327zf.css';
import '../../css/h/hc8c97wzt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukg4327zf"/><path class="hc8c97wzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-20-bold"} {...others} />);
}

export default Component;
