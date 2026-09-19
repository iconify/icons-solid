import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i-e5xqbyx.css';
import '../../css/m/mpznc0bgx.css';
import '../../css/w/w8--g4f7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="i-e5xqbyx"/><path class="mpznc0bgx"/><path class="w8--g4f7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-bag-02"} {...others} />);
}

export default Component;
