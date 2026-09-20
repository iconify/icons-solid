import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wocayubks.css';
import '../../css/a/a736vpyzo.css';
import '../../css/w/w13dkpbts.css';
import '../../css/y/yvq_4gmso.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<g class="cuyn6tgcc"><ellipse class="wocayubks"/><path class="a736vpyzo"/><ellipse class="w13dkpbts"/><path class="yvq_4gmso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:myspace"} {...others} />);
}

export default Component;
