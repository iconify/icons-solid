import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/barf7s2gy.css';
import '../../css/d/dkfqdrm2d.css';
import '../../css/g/g4dwobbaj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="barf7s2gy"/><path class="dkfqdrm2d"/><path class="g4dwobbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-valve-20-bold"} {...others} />);
}

export default Component;
