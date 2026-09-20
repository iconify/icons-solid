import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nr9i0kboz.css';
import '../../css/l/lhne2s_8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nr9i0kboz"/><path class="lhne2s_8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:visual-blind"} {...others} />);
}

export default Component;
