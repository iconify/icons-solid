import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qe6jzbblt.css';
import '../../css/n/n_jezs_eb.css';
import '../../css/x/xgwmkha6u.css';
import '../../css/r/ruvx9wuvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qe6jzbblt"/><path class="n_jezs_eb"/><path class="xgwmkha6u"/><path class="ruvx9wuvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plug-zap"} {...others} />);
}

export default Component;
