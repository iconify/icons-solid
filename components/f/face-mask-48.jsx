import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y153yih8p.css';
import '../../css/l/lxgy0sctt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y153yih8p"/><path class="lxgy0sctt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-mask-48"} {...others} />);
}

export default Component;
