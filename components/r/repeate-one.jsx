import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u5ecbfbjc.css';
import '../../css/a/akx15pb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u5ecbfbjc"/><path class="akx15pb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:repeate-one"} {...others} />);
}

export default Component;
