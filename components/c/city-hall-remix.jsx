import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfka8_bms.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mfka8_bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:city-hall-remix"} {...others} />);
}

export default Component;
