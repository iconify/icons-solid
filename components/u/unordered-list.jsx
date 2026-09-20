import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/svpwambew.css';
import '../../css/l/lwo-nbbud.css';
import '../../css/v/v2l5ufa5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="svpwambew"/><circle class="lwo-nbbud"/><path class="v2l5ufa5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:unordered-list"} {...others} />);
}

export default Component;
