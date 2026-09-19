import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac_v2wbiq.css';

const viewBox = {"width":455,"height":735};
const content = `<path class="ac_v2wbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:f-upper-case"} {...others} />);
}

export default Component;
