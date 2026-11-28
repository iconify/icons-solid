import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vtpmdroha.css';
import '../../css/e/e_0oumv9u.css';
import '../../css/q/qmqxyprqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vtpmdroha"/><path class="e_0oumv9u"/><path class="qmqxyprqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hammer"} {...others} />);
}

export default Component;
