import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xpp38abml.css';
import '../../css/q/qw2dtgbxp.css';
import '../../css/c/c3td6wbvr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xpp38abml"/><path class="qw2dtgbxp"/><path class="c3td6wbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wheelchair-2"} {...others} />);
}

export default Component;
