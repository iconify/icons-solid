import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-gk01bni.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqp1zj20f.css';
import '../../css/g/ghgl7wbcz.css';
import '../../css/y/yoox92wcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-gk01bni secondary"/><g class="dt0cm9dhy primary"><path class="cqp1zj20f"/><path class="ghgl7wbcz"/><path class="yoox92wcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:citrus-duo"} {...others} />);
}

export default Component;
