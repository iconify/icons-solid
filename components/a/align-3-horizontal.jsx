import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wg6oj_y.css';
import '../../css/c/ceigb7b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect transform="rotate(-90 12 17.333)" class="g9wg6oj_y"/><rect transform="rotate(-90 12 6.667)" class="ceigb7b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-3-horizontal"} {...others} />);
}

export default Component;
