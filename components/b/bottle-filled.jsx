import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-2s2sb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p-2s2sb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bottle-filled"} {...others} />);
}

export default Component;
