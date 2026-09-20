import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h4qdr5bzd.css';
import '../../css/u/ubewrjbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="h4qdr5bzd"/><path class="ubewrjbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:eye"} {...others} />);
}

export default Component;
