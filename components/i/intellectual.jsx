import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hu3z7fboy.css';
import '../../css/f/f-7rntbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="hu3z7fboy"/><path class="f-7rntbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:intellectual"} {...others} />);
}

export default Component;
