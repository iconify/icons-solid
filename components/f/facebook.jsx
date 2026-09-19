import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_8v8gnuf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h_8v8gnuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:facebook"} {...others} />);
}

export default Component;
