import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b82tnpazp.css';
import '../../css/v/v75yc8b7h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b82tnpazp"/><path class="v75yc8b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:needleleaved-tree-bottom-right-horizontal-line"} {...others} />);
}

export default Component;
