import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bfk3jubkp.css';
import '../../css/m/m6he4ac8i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="bfk3jubkp"/><path class="m6he4ac8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mouse-wireless-1"} {...others} />);
}

export default Component;
