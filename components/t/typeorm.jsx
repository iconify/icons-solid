import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiwqdl9ga.css';
import '../../css/g/gkmrzoxxh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kiwqdl9ga"/><path class="gkmrzoxxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typeorm"} {...others} />);
}

export default Component;
