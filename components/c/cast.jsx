import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blp81zbjo.css';
import '../../css/t/tawckh_aw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blp81zbjo"/><path class="tawckh_aw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cast"} {...others} />);
}

export default Component;
