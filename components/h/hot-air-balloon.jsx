import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u0sc6c07n.css';
import '../../css/z/zystp7bfg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u0sc6c07n"/><path class="zystp7bfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hot-air-balloon"} {...others} />);
}

export default Component;
