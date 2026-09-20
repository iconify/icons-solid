import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci1u_l1tk.css';
import '../../css/a/aiuvj1b6y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ci1u_l1tk"/><path class="aiuvj1b6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:right-to-left-16"} {...others} />);
}

export default Component;
