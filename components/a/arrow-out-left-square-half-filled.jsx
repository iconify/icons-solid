import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxf1odf7b.css';
import '../../css/s/sgoebkv5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxf1odf7b"/><path class="sgoebkv5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-left-square-half-filled"} {...others} />);
}

export default Component;
