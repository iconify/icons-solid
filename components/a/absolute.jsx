import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqmepvbqz.css';
import '../../css/j/j36ww4b-u.css';
import '../../css/c/cn4bvt4si.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xqmepvbqz"/><path class="j36ww4b-u"/><path class="cn4bvt4si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:absolute"} {...others} />);
}

export default Component;
