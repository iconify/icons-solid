import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkhijlqwg.css';
import '../../css/t/t6lrtvlfz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lkhijlqwg"/><path class="t6lrtvlfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pages-last-16"} {...others} />);
}

export default Component;
