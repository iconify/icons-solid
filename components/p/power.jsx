import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruf9kkree.css';
import '../../css/n/n0nc54wee.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ruf9kkree"/><path class="n0nc54wee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:power"} {...others} />);
}

export default Component;
