import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zq1q3021a.css';
import '../../css/s/s5a9wrp7u.css';
import '../../css/a/awed_9l6n.css';
import '../../css/g/gfovhfd2g.css';
import '../../css/i/iaz41ubnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zq1q3021a"/><path class="s5a9wrp7u"/><path class="awed_9l6n"/><path class="gfovhfd2g"/><path class="iaz41ubnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:radio"} {...others} />);
}

export default Component;
