import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztd26o_pc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ztd26o_pc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:inbox-in-alt-filled"} {...others} />);
}

export default Component;
