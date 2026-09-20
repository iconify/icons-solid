import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db7rvqw0n.css';

const viewBox = {"width":1000,"height":405};
const content = `<path class="db7rvqw0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:statelydotai-light"} {...others} />);
}

export default Component;
