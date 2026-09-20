import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-z0-pb_d.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f-z0-pb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:chrome-solid"} {...others} />);
}

export default Component;
