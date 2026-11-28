import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk0_bffgj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/viag24bxx.css';
import '../../css/n/nnw1_fa2c.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bk0_bffgj secondary"/><g class="dt0cm9dhy primary"><path class="viag24bxx"/><path class="nnw1_fa2c"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tag-off-duo"} {...others} />);
}

export default Component;
