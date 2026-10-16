import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae3ox-mnm.css';
import '../../css/p/pook9-t4z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ae3ox-mnm"/><path class="pook9-t4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boiler-48-bold"} {...others} />);
}

export default Component;
