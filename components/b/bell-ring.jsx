import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/epqu85bre.css';
import '../../css/c/cayxripun.css';
import '../../css/z/zz423vzxd.css';
import '../../css/q/qe-x2bc1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="epqu85bre"/><path class="cayxripun"/><path class="zz423vzxd"/><path class="qe-x2bc1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bell-ring"} {...others} />);
}

export default Component;
