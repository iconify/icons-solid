import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z2zz_yb2l.css';
import '../../css/c/ccgzjab3x.css';
import '../../css/r/rljci9moa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="z2zz_yb2l"/><path class="ccgzjab3x"/><path class="rljci9moa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bot"} {...others} />);
}

export default Component;
