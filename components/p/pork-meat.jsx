import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k0rwvub7m.css';
import '../../css/a/a2tlaq5tc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="k0rwvub7m"/><path class="a2tlaq5tc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pork-meat"} {...others} />);
}

export default Component;
