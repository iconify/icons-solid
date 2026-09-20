import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdd9k55bw.css';
import '../../css/g/gtr9mcbgh.css';
import '../../css/n/n_5_uwbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qdd9k55bw"/><path class="gtr9mcbgh"/><path class="n_5_uwbjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bitcoin-card"} {...others} />);
}

export default Component;
