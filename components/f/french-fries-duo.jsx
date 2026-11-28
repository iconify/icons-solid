import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppd78f9kg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dq3ueh2oc.css';
import '../../css/t/teh9ljbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ppd78f9kg secondary"/><g class="dt0cm9dhy primary"><path class="dq3ueh2oc"/><path class="teh9ljbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:french-fries-duo"} {...others} />);
}

export default Component;
