import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5mmfqb3k.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/y/ya36n4blz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v5mmfqb3k"/><path class="bw2p-ubhh"/><path class="ya36n4blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-area-multi"} {...others} />);
}

export default Component;
