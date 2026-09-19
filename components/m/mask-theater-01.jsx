import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qej4dhb9q.css';
import '../../css/u/u0kq7ccsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qej4dhb9q"/><path class="u0kq7ccsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mask-theater-01"} {...others} />);
}

export default Component;
