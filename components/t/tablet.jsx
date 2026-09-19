import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coqe7zz9j.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="coqe7zz9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:tablet"} {...others} />);
}

export default Component;
