import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4v017l6t.css';
import '../../css/v/v1j9wac_l.css';
import '../../css/s/sy9gb5bzi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l4v017l6t"/><path class="v1j9wac_l"/><path class="sy9gb5bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:status-resolved"} {...others} />);
}

export default Component;
