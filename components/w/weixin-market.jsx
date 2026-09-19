import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lyj3e5zew.css';
import '../../css/v/v8lrvwzjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lyj3e5zew"/><path class="v8lrvwzjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:weixin-market"} {...others} />);
}

export default Component;
