import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/i/i4-6jwz0t.css';
import '../../css/g/g03306d2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="i4-6jwz0t"/><path class="g03306d2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:holding-hands"} {...others} />);
}

export default Component;
