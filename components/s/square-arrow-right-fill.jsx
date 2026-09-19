import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blh-a7_ck.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="blh-a7_ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-arrow-right-fill"} {...others} />);
}

export default Component;
