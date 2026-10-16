import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guu8cvajv.css';
import '../../css/d/dfl7556qi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="guu8cvajv"/><path class="dfl7556qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:siren-48-bold"} {...others} />);
}

export default Component;
