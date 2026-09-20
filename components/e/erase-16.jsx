import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-gd7u-dq.css';
import '../../css/a/a6o68sb3j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x-gd7u-dq"/><path clip-rule="evenodd" class="a6o68sb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:erase-16"} {...others} />);
}

export default Component;
