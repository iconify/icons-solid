import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/is08t52yx.css';
import '../../css/e/eoe13w36s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="is08t52yx"/><path class="eoe13w36s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-to-line-linear"} {...others} />);
}

export default Component;
