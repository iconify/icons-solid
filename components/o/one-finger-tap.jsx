import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/ra4b4ci9q.css';
import '../../css/x/xjz-8_b5k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ra4b4ci9q"/><path class="xjz-8_b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:one-finger-tap"} {...others} />);
}

export default Component;
