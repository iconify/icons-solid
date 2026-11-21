import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9k1c_ucr.css';
import '../../css/r/rkglh0mnh.css';
import '../../css/i/itkvrn4ca.css';
import '../../css/l/l0t-gpb8d.css';
import '../../css/y/yza2inbiw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9k1c_ucr"/><path class="rkglh0mnh"/><path class="itkvrn4ca"/><path class="l0t-gpb8d"/><path class="yza2inbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:fast-food-outline"} {...others} />);
}

export default Component;
