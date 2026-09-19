import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_6lzl0ye.css';

const viewBox = {"width":384,"height":488};
const content = `<path class="u_6lzl0ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:etsy"} {...others} />);
}

export default Component;
