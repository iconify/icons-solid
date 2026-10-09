import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwgv7ib-v.css';
import '../../css/i/is5lj6bol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jwgv7ib-v"/><path class="is5lj6bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:environmental-impact-48-bold"} {...others} />);
}

export default Component;
