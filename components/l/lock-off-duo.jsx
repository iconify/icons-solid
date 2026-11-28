import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8qn0jbck.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0psnqe2o.css';
import '../../css/h/hgj93qb8m.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8qn0jbck secondary"/><g class="dt0cm9dhy primary"><path class="m0psnqe2o"/><path class="hgj93qb8m"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lock-off-duo"} {...others} />);
}

export default Component;
