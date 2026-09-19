import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynrzkyrbc.css';
import '../../css/x/xh625w_0z.css';
import '../../css/i/itkvrn4ca.css';
import '../../css/l/l0t-gpb8d.css';
import '../../css/y/yza2inbiw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ynrzkyrbc"/><path class="xh625w_0z"/><path class="itkvrn4ca"/><path class="l0t-gpb8d"/><path class="yza2inbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:fast-food-outline"} {...others} />);
}

export default Component;
