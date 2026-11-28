import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v1u1iuzxy.css';
import '../../css/a/a5dkqgbtz.css';
import '../../css/d/deea3zlhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v1u1iuzxy"/><path class="a5dkqgbtz"/><path class="deea3zlhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vine"} {...others} />);
}

export default Component;
