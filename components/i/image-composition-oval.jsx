import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zuk_rvboj.css';
import '../../css/u/uj_5xackz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zuk_rvboj"/><path class="uj_5xackz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-composition-oval"} {...others} />);
}

export default Component;
