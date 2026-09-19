import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7m911b_b.css';
import '../../css/j/jrn4e4b1s.css';
import '../../css/f/fxcjnopxo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o7m911b_b"/><path class="jrn4e4b1s"/><path class="fxcjnopxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-tennisball"} {...others} />);
}

export default Component;
