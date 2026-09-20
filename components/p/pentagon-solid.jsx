import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiwobry8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xiwobry8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pentagon-solid"} {...others} />);
}

export default Component;
