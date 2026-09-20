import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj8lr2bdq.css';
import '../../css/c/c6ggvk-4f.css';
import '../../css/m/m2qp7_pyl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hj8lr2bdq"/><path class="c6ggvk-4f"/><path class="m2qp7_pyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:layers-solid"} {...others} />);
}

export default Component;
