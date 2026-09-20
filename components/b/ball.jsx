import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uo8xz9hve.css';
import '../../css/y/yeqzvu9wl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uo8xz9hve"/><path class="yeqzvu9wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ball"} {...others} />);
}

export default Component;
