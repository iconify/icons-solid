import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6geo1bkk.css';
import '../../css/d/drbv3ibqe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h6geo1bkk"/><path class="drbv3ibqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chat"} {...others} />);
}

export default Component;
