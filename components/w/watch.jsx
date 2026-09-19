import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-5v66b_l.css';
import '../../css/h/hj7x4zb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-5v66b_l"/><path class="hj7x4zb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:watch"} {...others} />);
}

export default Component;
