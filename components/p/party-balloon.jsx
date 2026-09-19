import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb1ty3wqo.css';
import '../../css/e/ejctb8bxa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kb1ty3wqo"/><path class="ejctb8bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:party-balloon"} {...others} />);
}

export default Component;
