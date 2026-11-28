import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i24p_w3hn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pg2o5sb4v.css';
import '../../css/g/g1x39jbgp.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i24p_w3hn secondary"/><g class="dt0cm9dhy primary"><path class="pg2o5sb4v"/><path class="g1x39jbgp"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:copy-off-duo"} {...others} />);
}

export default Component;
