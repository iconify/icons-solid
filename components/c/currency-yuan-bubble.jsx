import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b70jd7d4m.css';
import '../../css/t/t20t2zb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b70jd7d4m"/><path class="t20t2zb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:currency-yuan-bubble"} {...others} />);
}

export default Component;
