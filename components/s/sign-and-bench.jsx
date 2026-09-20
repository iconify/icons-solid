import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnp7o8bhw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nnp7o8bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:sign-and-bench"} {...others} />);
}

export default Component;
