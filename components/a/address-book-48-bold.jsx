import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djvqpt-nt.css';
import '../../css/i/i3kvsjzmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="djvqpt-nt"/><path class="i3kvsjzmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:address-book-48-bold"} {...others} />);
}

export default Component;
