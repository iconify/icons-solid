import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chj_3ab-w.css';
import '../../css/v/v97disbjn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="chj_3ab-w"/><path clip-rule="evenodd" class="v97disbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:disk-16"} {...others} />);
}

export default Component;
