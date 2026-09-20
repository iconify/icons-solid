import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/feuq6o2hw.css';
import '../../css/a/a19bgfcuu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="feuq6o2hw"/><path class="a19bgfcuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:treasure-chest"} {...others} />);
}

export default Component;
