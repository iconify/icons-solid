import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxscixp0f.css';
import '../../css/l/liyj23bun.css';
import '../../css/o/omvia3qke.css';
import '../../css/n/n1-ol-blu.css';
import '../../css/t/t7qu00-xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="kxscixp0f"><path class="liyj23bun"/><path class="omvia3qke"/><path class="n1-ol-blu"/><path class="t7qu00-xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:kcl"} {...others} />);
}

export default Component;
