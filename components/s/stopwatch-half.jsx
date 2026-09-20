import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f2y9nubun.css';
import '../../css/u/ushenetqx.css';
import '../../css/n/nifqkzicp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="f2y9nubun"/><path class="ushenetqx"/><path class="nifqkzicp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:stopwatch-half"} {...others} />);
}

export default Component;
