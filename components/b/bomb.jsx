import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn9u4nb1b.css';
import '../../css/r/r_rs3to2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn9u4nb1b"/><path class="r_rs3to2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bomb"} {...others} />);
}

export default Component;
