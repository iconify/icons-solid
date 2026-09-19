import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq5ia6bva.css';
import '../../css/d/d9j16w-4q.css';
import '../../css/h/ha7cjabon.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gq5ia6bva"/><path class="d9j16w-4q"/><path class="ha7cjabon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ubuntu-wordmark"} {...others} />);
}

export default Component;
