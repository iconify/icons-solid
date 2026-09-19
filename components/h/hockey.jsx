import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/x/xq2db5kru.css';
import '../../css/u/uzxjw3bvb.css';
import '../../css/z/zlv6ucc1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="xq2db5kru"/><path class="uzxjw3bvb"/><path class="zlv6ucc1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hockey"} {...others} />);
}

export default Component;
