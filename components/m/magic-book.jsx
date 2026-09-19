import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fav_rib3i.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fav_rib3i"/><path class="zlhh38l7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:magic-book"} {...others} />);
}

export default Component;
