import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eoq5e_b6o.css';
import '../../css/e/eu8jy0u3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eoq5e_b6o"/><path class="eu8jy0u3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-cancel-02"} {...others} />);
}

export default Component;
