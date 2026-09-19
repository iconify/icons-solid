import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqhh-5byr.css';
import '../../css/x/xo26xfwgu.css';
import '../../css/p/pa6q0ccyu.css';
import '../../css/y/yefmyk4qs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xqhh-5byr"/><circle class="xo26xfwgu"/><path class="pa6q0ccyu"/><path class="yefmyk4qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-signed"} {...others} />);
}

export default Component;
