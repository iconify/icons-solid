import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtr2w7blj.css';
import '../../css/q/qvhmvvbnn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mtr2w7blj"/><path clip-rule="evenodd" class="qvhmvvbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:password-16"} {...others} />);
}

export default Component;
