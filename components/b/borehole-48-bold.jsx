import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oppq-ug0u.css';
import '../../css/l/l-_13j-ie.css';
import '../../css/n/nr6pp78hl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oppq-ug0u"/><path class="l-_13j-ie"/><path class="nr6pp78hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:borehole-48-bold"} {...others} />);
}

export default Component;
