import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lz_-0e4ls.css';
import '../../css/t/t0qa7ybty.css';
import '../../css/o/o9v5-fb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lz_-0e4ls"/><path class="t0qa7ybty"/><path class="o9v5-fb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:insert-cloud-link"} {...others} />);
}

export default Component;
