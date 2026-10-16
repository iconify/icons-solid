import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwwimyb2n.css';
import '../../css/w/whqsulbjb.css';
import '../../css/r/rcwt38dik.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hwwimyb2n"/><path class="whqsulbjb"/><path class="rcwt38dik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-bus-20-bold"} {...others} />);
}

export default Component;
