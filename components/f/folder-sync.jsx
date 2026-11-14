import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/anwmk3bjq.css';
import '../../css/u/uc2ax5crs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="anwmk3bjq"/><path class="uc2ax5crs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-sync"} {...others} />);
}

export default Component;
