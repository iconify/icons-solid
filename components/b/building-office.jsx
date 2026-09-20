import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lfc-8-ano.css';
import '../../css/b/bjoht_2zj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lfc-8-ano"/><path class="bjoht_2zj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:building-office"} {...others} />);
}

export default Component;
