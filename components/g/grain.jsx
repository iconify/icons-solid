import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3pwlbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vm3pwlbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:grain"} {...others} />);
}

export default Component;
