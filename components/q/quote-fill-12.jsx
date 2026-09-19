import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-rtspsnc.css';
import '../../css/o/owdlqbbrs.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="l-rtspsnc"/><path class="owdlqbbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:quote-fill-12"} {...others} />);
}

export default Component;
