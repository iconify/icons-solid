import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ea4sq7b7c.css';
import '../../css/i/ie_xilbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ea4sq7b7c"/><path class="ie_xilbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plant-02"} {...others} />);
}

export default Component;
