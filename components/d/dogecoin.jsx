import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwxb-w_rr.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="pwxb-w_rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:dogecoin"} {...others} />);
}

export default Component;
