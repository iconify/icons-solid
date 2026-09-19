import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfvnc4bsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfvnc4bsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vignette-filled"} {...others} />);
}

export default Component;
