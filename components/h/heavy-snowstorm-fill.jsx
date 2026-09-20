import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckvmpmb0v.css';
import '../../css/c/cgk_qryyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckvmpmb0v"/><path class="cgk_qryyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heavy-snowstorm-fill"} {...others} />);
}

export default Component;
