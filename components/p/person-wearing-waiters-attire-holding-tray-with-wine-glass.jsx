import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj8r7vbsk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fj8r7vbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-wearing-waiters-attire-holding-tray-with-wine-glass"} {...others} />);
}

export default Component;
