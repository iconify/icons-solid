import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3bcjsagj.css';
import '../../css/g/gx0yaobvf.css';
import '../../css/p/p6j-kgamt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i3bcjsagj"/><path class="gx0yaobvf"/><path class="p6j-kgamt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:first-aid-48"} {...others} />);
}

export default Component;
