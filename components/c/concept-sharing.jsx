import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/za087rbox.css';
import '../../css/q/qeugsjbsl.css';
import '../../css/y/y1g8qib3o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="za087rbox"/><path clip-rule="evenodd" class="qeugsjbsl"/><path class="y1g8qib3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:concept-sharing"} {...others} />);
}

export default Component;
