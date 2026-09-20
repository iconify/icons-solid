import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/frwu2ybns.css';
import '../../css/n/nowfm5boy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="frwu2ybns"/><path class="nowfm5boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:dog-1"} {...others} />);
}

export default Component;
