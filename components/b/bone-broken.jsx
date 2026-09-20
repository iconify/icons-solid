import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n97-l2bar.css';
import '../../css/b/b94xtzblu.css';
import '../../css/b/b7iizbs3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n97-l2bar"/><path class="b94xtzblu"/><path clip-rule="evenodd" class="b7iizbs3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bone-broken"} {...others} />);
}

export default Component;
