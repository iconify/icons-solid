import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2lbcip5t.css';
import '../../css/n/n8v0i5ock.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m2lbcip5t"/><path class="n8v0i5ock"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:no-link"} {...others} />);
}

export default Component;
