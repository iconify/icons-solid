import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8v5izblz.css';
import '../../css/e/e_y__bbjx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z8v5izblz"/><path class="e_y__bbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plunger-48-bold"} {...others} />);
}

export default Component;
