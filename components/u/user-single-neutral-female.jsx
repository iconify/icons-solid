import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/swfzs87sw.css';
import '../../css/m/mm2wvlxbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="swfzs87sw"/><path class="mm2wvlxbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-single-neutral-female"} {...others} />);
}

export default Component;
