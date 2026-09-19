import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmdp-p_5w.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="rmdp-p_5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-arrow-up-on-square-fill"} {...others} />);
}

export default Component;
