import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9t00gb6u.css';
import '../../css/f/fqwpfx1sz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9t00gb6u"/><path class="fqwpfx1sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-48"} {...others} />);
}

export default Component;
