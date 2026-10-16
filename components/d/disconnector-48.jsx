import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg22kut3v.css';
import '../../css/o/ojajqfjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tg22kut3v"/><path class="ojajqfjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:disconnector-48"} {...others} />);
}

export default Component;
