import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4sk49bjy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c4sk49bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:moon-fill-20"} {...others} />);
}

export default Component;
