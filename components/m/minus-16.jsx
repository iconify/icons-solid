import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yttk-xbta.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="yttk-xbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:minus-16"} {...others} />);
}

export default Component;
