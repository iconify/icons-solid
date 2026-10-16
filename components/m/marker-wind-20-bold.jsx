import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/q/q0ohsgrim.css';
import '../../css/s/snb525bvf.css';
import '../../css/z/zqel-5qvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="q0ohsgrim"/><path class="snb525bvf"/><path class="zqel-5qvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-wind-20-bold"} {...others} />);
}

export default Component;
