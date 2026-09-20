import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfcl9ekst.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rfcl9ekst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:airplane-disabled-solid"} {...others} />);
}

export default Component;
