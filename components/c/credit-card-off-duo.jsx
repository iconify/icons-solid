import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f61dg8z5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kn195jlxb.css';
import '../../css/e/e0m_55bwe.css';
import '../../css/o/oosjvp21t.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f61dg8z5p secondary"/><g class="dt0cm9dhy primary"><path class="kn195jlxb"/><path class="e0m_55bwe"/><path class="oosjvp21t"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:credit-card-off-duo"} {...others} />);
}

export default Component;
