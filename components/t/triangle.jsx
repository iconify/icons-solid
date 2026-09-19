import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb29_fb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb29_fb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:triangle"} {...others} />);
}

export default Component;
