import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-bp_jbwf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o-bp_jbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:bone-long-outline"} {...others} />);
}

export default Component;
