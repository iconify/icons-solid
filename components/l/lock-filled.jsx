import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugkyat6-v.css';
import '../../css/a/a1iy-fbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ugkyat6-v"/><path clip-rule="evenodd" class="a1iy-fbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:lock-filled"} {...others} />);
}

export default Component;
