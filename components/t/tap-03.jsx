import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9xmkqhif.css';
import '../../css/p/p40hk-e5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b9xmkqhif"/><path class="p40hk-e5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-03"} {...others} />);
}

export default Component;
