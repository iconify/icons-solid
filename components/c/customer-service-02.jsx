import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4qn3mn9e.css';
import '../../css/m/mauw27bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y4qn3mn9e"/><path class="mauw27bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customer-service-02"} {...others} />);
}

export default Component;
