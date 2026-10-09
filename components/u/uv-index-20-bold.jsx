import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho_z9ty5t.css';
import '../../css/h/he6n-hpbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ho_z9ty5t"/><path class="he6n-hpbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:uv-index-20-bold"} {...others} />);
}

export default Component;
