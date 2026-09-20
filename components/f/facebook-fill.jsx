import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ava2r5bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ava2r5bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:facebook-fill"} {...others} />);
}

export default Component;
