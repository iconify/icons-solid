import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjlkw135c.css';
import '../../css/h/hxvilxtxe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vjlkw135c"/><path class="hxvilxtxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warming-stripes-48"} {...others} />);
}

export default Component;
