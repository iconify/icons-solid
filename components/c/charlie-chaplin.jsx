import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wgh5e8t6z.css';
import '../../css/e/eagvlsbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="wgh5e8t6z"/><path class="eagvlsbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:charlie-chaplin"} {...others} />);
}

export default Component;
