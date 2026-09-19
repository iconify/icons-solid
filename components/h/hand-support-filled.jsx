import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk-i4_xvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wk-i4_xvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hand-support-filled"} {...others} />);
}

export default Component;
