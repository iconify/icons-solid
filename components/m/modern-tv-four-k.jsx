import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kab3y4bfd.css';
import '../../css/z/zotzn1z5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kab3y4bfd"/><path class="zotzn1z5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:modern-tv-four-k"} {...others} />);
}

export default Component;
