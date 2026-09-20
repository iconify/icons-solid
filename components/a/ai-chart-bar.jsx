import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u64obkvvp.css';
import '../../css/k/koaozeboc.css';
import '../../css/l/ldpo4n3qb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u64obkvvp"/><path class="koaozeboc"/><path class="ldpo4n3qb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-chart-bar"} {...others} />);
}

export default Component;
