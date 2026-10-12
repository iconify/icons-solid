import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm9sh3z2f.css';
import '../../css/j/j319albkc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xm9sh3z2f"/><path class="j319albkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-stroke-20"} {...others} />);
}

export default Component;
