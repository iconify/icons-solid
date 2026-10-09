import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hseox7a5f.css';
import '../../css/r/rdbz-ccxi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hseox7a5f"/><path class="rdbz-ccxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:countryside-20-bold"} {...others} />);
}

export default Component;
