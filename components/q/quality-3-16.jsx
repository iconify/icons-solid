import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz0qowrdw.css';
import '../../css/b/bc_xb1bux.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zz0qowrdw"/><path class="bc_xb1bux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:quality-3-16"} {...others} />);
}

export default Component;
