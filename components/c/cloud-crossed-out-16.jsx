import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh4yl5yun.css';
import '../../css/i/i8ocx-9hv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rh4yl5yun"/><path class="i8ocx-9hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cloud-crossed-out-16"} {...others} />);
}

export default Component;
