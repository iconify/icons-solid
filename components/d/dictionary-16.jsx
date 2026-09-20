import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_asi6lle.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="s_asi6lle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:dictionary-16"} {...others} />);
}

export default Component;
