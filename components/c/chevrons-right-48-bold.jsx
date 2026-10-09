import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grgrw979e.css';
import '../../css/w/wu8h8ib5y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="grgrw979e"/><path class="wu8h8ib5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-right-48-bold"} {...others} />);
}

export default Component;
