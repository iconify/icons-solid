import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee5hpnb7w.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ee5hpnb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-right-arrow-right-keyboard"} {...others} />);
}

export default Component;
