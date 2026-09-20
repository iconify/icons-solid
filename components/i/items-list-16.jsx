import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f60vnpbnl.css';
import '../../css/i/iv6-xf8hg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f60vnpbnl"/><path class="iv6-xf8hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:items-list-16"} {...others} />);
}

export default Component;
