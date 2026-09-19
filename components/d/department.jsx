import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjcnosa2s.css';
import '../../css/i/i7hjkjq5j.css';
import '../../css/e/esibc_bpa.css';
import '../../css/b/bdrvyebhx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wjcnosa2s"/><path class="i7hjkjq5j"/><path class="esibc_bpa"/><path class="bdrvyebhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:department"} {...others} />);
}

export default Component;
