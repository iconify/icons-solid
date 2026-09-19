import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0m1zubph.css';
import '../../css/e/e2bhb21jn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d0m1zubph"/><path class="e2bhb21jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-minus-corner"} {...others} />);
}

export default Component;
