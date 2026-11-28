import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7v0zjbzo.css';
import '../../css/a/aivyodbgw.css';
import '../../css/j/jfq8r8bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v7v0zjbzo"/><path class="aivyodbgw"/><path class="jfq8r8bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-arrow-left"} {...others} />);
}

export default Component;
