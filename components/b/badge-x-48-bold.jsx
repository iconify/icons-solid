import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si1030bhs.css';
import '../../css/t/tozua4tpq.css';
import '../../css/z/zebyaelmq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="si1030bhs"/><path class="tozua4tpq"/><path class="zebyaelmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-x-48-bold"} {...others} />);
}

export default Component;
