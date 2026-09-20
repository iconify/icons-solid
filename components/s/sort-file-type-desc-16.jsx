import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6g6x7bsy.css';
import '../../css/v/vzru2hbyh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c6g6x7bsy"/><path clip-rule="evenodd" class="vzru2hbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-file-type-desc-16"} {...others} />);
}

export default Component;
