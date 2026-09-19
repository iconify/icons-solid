import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/esfn5ibdw.css';
import '../../css/r/rsx2v59mc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="esfn5ibdw"/><path class="rsx2v59mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:code-brackets"} {...others} />);
}

export default Component;
