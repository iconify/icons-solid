import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd5pzlbdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fd5pzlbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:thumbs-down-fill-20"} {...others} />);
}

export default Component;
