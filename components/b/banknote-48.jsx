import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shgfqubvu.css';
import '../../css/b/b101e8_sq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shgfqubvu"/><path class="b101e8_sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:banknote-48"} {...others} />);
}

export default Component;
