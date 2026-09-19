import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8e288bnc.css';
import '../../css/u/un6ua_l-y.css';
import '../../css/v/v4sg5jbkh.css';
import '../../css/z/zlv3p35br.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v8e288bnc"/><path class="un6ua_l-y"/><path class="v4sg5jbkh"/><path class="zlv3p35br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-no-smoking"} {...others} />);
}

export default Component;
