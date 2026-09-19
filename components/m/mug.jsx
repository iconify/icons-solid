import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dklul-ukq.css';
import '../../css/t/tgyzahb8t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dklul-ukq"/><path class="tgyzahb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:mug"} {...others} />);
}

export default Component;
