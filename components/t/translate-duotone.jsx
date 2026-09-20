import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkon69jfq.css';
import '../../css/z/zbemz-ixu.css';
import '../../css/s/sa9u68h3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jkon69jfq"/><path class="zbemz-ixu"/><path class="sa9u68h3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate-duotone"} {...others} />);
}

export default Component;
