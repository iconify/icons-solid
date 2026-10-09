import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fad7f9tkf.css';
import '../../css/n/nq0-d_lbp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fad7f9tkf"/><path class="nq0-d_lbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grass-20-bold"} {...others} />);
}

export default Component;
