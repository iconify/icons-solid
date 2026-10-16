import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-ykpjboh.css';
import '../../css/w/w-yr_fb2g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j-ykpjboh"/><path class="w-yr_fb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ethernet-port-48-bold"} {...others} />);
}

export default Component;
