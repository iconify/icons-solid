import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvezwc7ew.css';
import '../../css/u/uemg9fbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvezwc7ew"/><path class="uemg9fbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:database-filled"} {...others} />);
}

export default Component;
