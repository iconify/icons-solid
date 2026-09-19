import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-_yemb4e.css';
import '../../css/l/lwxr_bbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d-_yemb4e"/><path class="lwxr_bbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-02"} {...others} />);
}

export default Component;
