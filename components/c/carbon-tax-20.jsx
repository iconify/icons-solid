import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjnt2fbgz.css';
import '../../css/x/xinwgk1sj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rjnt2fbgz"/><path class="xinwgk1sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-tax-20"} {...others} />);
}

export default Component;
