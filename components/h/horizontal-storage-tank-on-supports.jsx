import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f38hztbpz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f38hztbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:horizontal-storage-tank-on-supports"} {...others} />);
}

export default Component;
