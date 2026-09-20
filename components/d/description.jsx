import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/atvg2-b6z.css';
import '../../css/a/a5as_vbii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="atvg2-b6z"/><path class="a5as_vbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:description"} {...others} />);
}

export default Component;
