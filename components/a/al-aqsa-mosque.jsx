import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4k1ykbww.css';
import '../../css/i/i73gwxbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u4k1ykbww"/><path class="i73gwxbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:al-aqsa-mosque"} {...others} />);
}

export default Component;
