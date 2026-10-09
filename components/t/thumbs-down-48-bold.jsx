import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqif18inc.css';
import '../../css/u/u2-y_cc6i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oqif18inc"/><path class="u2-y_cc6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-down-48-bold"} {...others} />);
}

export default Component;
