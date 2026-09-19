import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj-kox43j.css';
import '../../css/h/hew_hqbtw.css';
import '../../css/f/frzp0kb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zj-kox43j"/><path class="hew_hqbtw"/><path class="frzp0kb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-not-found-01"} {...others} />);
}

export default Component;
