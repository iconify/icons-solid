import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yimvkjbpw.css';
import '../../css/o/o50ybe-st.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yimvkjbpw"/><path class="o50ybe-st"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rotate-ccw-key"} {...others} />);
}

export default Component;
