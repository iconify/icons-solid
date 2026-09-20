import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp06kp_uu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pp06kp_uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:minus-square-filled"} {...others} />);
}

export default Component;
