import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m9o65nmfm.css';
import '../../css/l/l-9noocio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="m9o65nmfm"/><path class="l-9noocio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-bag-thin"} {...others} />);
}

export default Component;
