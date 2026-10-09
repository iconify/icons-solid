import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq6s4g74y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oq6s4g74y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stop-48-bold"} {...others} />);
}

export default Component;
