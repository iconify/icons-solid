import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9uvctq-c.css';
import '../../css/p/ps4u58b2c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9uvctq-c"/><path class="ps4u58b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:street-light-48"} {...others} />);
}

export default Component;
