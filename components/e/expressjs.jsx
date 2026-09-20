import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi-ee_d_q.css';
import '../../css/i/i9aia1bgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi-ee_d_q"/><path clip-rule="evenodd" class="i9aia1bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:expressjs"} {...others} />);
}

export default Component;
