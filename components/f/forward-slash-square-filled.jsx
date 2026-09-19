import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw1zb91cp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bw1zb91cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:forward-slash-square-filled"} {...others} />);
}

export default Component;
