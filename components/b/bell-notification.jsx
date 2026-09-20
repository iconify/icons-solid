import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/men0j37ro.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="men0j37ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bell-notification"} {...others} />);
}

export default Component;
