import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz0bikexj.css';
import '../../css/a/an2--ubjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nz0bikexj"/><path class="an2--ubjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:border-outer"} {...others} />);
}

export default Component;
