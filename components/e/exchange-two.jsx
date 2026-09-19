import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q13ik7jzl.css';
import '../../css/k/k0wmzacqy.css';
import '../../css/a/a5wufhhze.css';
import '../../css/a/azaugjfmo.css';
import '../../css/s/sf4eilb8p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="q13ik7jzl"/><path class="k0wmzacqy"/><path class="a5wufhhze"/><path class="azaugjfmo"/><path class="sf4eilb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:exchange-two"} {...others} />);
}

export default Component;
