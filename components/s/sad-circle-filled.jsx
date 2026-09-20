import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg3m-ybnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vg3m-ybnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sad-circle-filled"} {...others} />);
}

export default Component;
