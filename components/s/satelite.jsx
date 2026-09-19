import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7t30-klj.css';
import '../../css/n/nbg7fqb_b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s7t30-klj"/><path class="nbg7fqb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:satelite"} {...others} />);
}

export default Component;
