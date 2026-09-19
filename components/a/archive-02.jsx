import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhv_4ex4m.css';
import '../../css/m/mj1c-3ccf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhv_4ex4m"/><path class="mj1c-3ccf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-02"} {...others} />);
}

export default Component;
