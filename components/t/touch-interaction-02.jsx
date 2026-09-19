import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/buu8rsq2s.css';
import '../../css/n/nslbg6b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="buu8rsq2s"/><path class="nslbg6b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-interaction-02"} {...others} />);
}

export default Component;
