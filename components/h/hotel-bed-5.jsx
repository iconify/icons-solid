import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uuokjcc1w.css';
import '../../css/n/noma2aced.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uuokjcc1w"/><path class="noma2aced"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hotel-bed-5"} {...others} />);
}

export default Component;
