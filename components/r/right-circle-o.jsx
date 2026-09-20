import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_2-cccrq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u_2-cccrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:right-circle-o"} {...others} />);
}

export default Component;
