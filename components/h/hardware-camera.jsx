import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be0vdpbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="be0vdpbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:hardware-camera"} {...others} />);
}

export default Component;
