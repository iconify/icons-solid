import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds2j1pnfv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ds2j1pnfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:plant"} {...others} />);
}

export default Component;
