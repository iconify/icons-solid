import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/frfk1pw2o.css';
import '../../css/w/wn0pp6ege.css';
import '../../css/h/hcwvzkbxx.css';
import '../../css/z/z9a_vxbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="frfk1pw2o"/><path class="wn0pp6ege"/><path class="hcwvzkbxx"/><path class="z9a_vxbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:align-right"} {...others} />);
}

export default Component;
