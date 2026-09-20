import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq7_izb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iq7_izb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flash-drive-filled"} {...others} />);
}

export default Component;
