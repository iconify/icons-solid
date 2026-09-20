import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/obyoxe9wk.css';
import '../../css/e/ey2vinn0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="obyoxe9wk"/><path class="ey2vinn0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:delivery-package-person"} {...others} />);
}

export default Component;
