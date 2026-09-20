import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/genxdrb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="genxdrb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hierarchy-square3-filled"} {...others} />);
}

export default Component;
