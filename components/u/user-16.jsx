import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1u65mb1a.css';
import '../../css/e/e6siqkbmp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z1u65mb1a"/><path clip-rule="evenodd" class="e6siqkbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:user-16"} {...others} />);
}

export default Component;
