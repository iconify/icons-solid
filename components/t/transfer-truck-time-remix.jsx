import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwo_g8yno.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="iwo_g8yno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:transfer-truck-time-remix"} {...others} />);
}

export default Component;
