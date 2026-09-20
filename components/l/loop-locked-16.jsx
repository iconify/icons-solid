import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y76tssbey.css';
import '../../css/s/s151yac2i.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="y76tssbey"/><path class="s151yac2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:loop-locked-16"} {...others} />);
}

export default Component;
