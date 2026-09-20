import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y3ug6dett.css';
import '../../css/w/wfrd3qbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y3ug6dett"/><path class="wfrd3qbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-italic-line-duotone"} {...others} />);
}

export default Component;
