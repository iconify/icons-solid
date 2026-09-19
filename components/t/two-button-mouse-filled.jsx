import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pser2-bxo.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="pser2-bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:two-button-mouse-filled"} {...others} />);
}

export default Component;
