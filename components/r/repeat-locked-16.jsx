import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lujml7c8c.css';
import '../../css/i/i_6j01bti.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lujml7c8c"/><path clip-rule="evenodd" class="i_6j01bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:repeat-locked-16"} {...others} />);
}

export default Component;
