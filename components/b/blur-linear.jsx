import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clg13_kjw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="clg13_kjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:blur-linear"} {...others} />);
}

export default Component;
