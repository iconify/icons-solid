import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hr4pu4blu.css';
import '../../css/p/p5g5pxbqg.css';
import '../../css/k/k3eo_eo4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hr4pu4blu"/><path class="p5g5pxbqg"/><path class="k3eo_eo4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:data2-filled"} {...others} />);
}

export default Component;
