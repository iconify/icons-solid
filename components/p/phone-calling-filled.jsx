import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp4y0ebkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp4y0ebkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:phone-calling-filled"} {...others} />);
}

export default Component;
