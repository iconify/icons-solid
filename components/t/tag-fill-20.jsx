import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvnxxvb2k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fvnxxvb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:tag-fill-20"} {...others} />);
}

export default Component;
