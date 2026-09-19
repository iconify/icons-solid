import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-1znsb_i.css';
import '../../css/w/w_-tejb9n.css';
import '../../css/o/o4i6_qebr.css';
import '../../css/w/wrzyrqwoe.css';
import '../../css/f/fxiro_i8r.css';
import '../../css/g/g6l4ysblj.css';
import '../../css/m/mv0lp3bsf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m-1znsb_i"/><path class="w_-tejb9n"/><path class="o4i6_qebr"/><path class="wrzyrqwoe"/><path class="fxiro_i8r"/><path class="g6l4ysblj"/><path class="mv0lp3bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dbeaver"} {...others} />);
}

export default Component;
