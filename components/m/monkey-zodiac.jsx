import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j3j_1ebwj.css';
import '../../css/v/vqctzsb3a.css';
import '../../css/v/vyvrc948i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j3j_1ebwj"/><path class="vqctzsb3a"/><path class="vyvrc948i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monkey-zodiac"} {...others} />);
}

export default Component;
