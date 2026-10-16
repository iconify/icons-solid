import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsmhpgwcs.css';
import '../../css/f/fh8g7ab6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsmhpgwcs"/><path class="fh8g7ab6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:code-block-48"} {...others} />);
}

export default Component;
