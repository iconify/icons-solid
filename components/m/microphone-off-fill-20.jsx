import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfq2u9byp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dfq2u9byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-off-fill-20"} {...others} />);
}

export default Component;
