import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y1nzqhbxy.css';
import '../../css/g/gks5wfbfb.css';
import '../../css/s/si_kdro5v.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/d/d14d6zroq.css';
import '../../css/u/ukjazgbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y1nzqhbxy"/><path class="gks5wfbfb"/><path class="si_kdro5v"/><path class="zrlh-6b7n"/><path class="d14d6zroq"/><path class="ukjazgbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:more-vertical"} {...others} />);
}

export default Component;
