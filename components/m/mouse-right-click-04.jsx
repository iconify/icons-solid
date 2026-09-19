import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q2hkngy9g.css';
import '../../css/j/jwjog_-hh.css';
import '../../css/o/oj6yh1dyi.css';
import '../../css/m/m5ccstaut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q2hkngy9g"/><path class="jwjog_-hh"/><path class="oj6yh1dyi"/><path class="m5ccstaut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-right-click-04"} {...others} />);
}

export default Component;
