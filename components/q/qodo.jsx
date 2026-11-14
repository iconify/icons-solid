import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my18y5bfg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="my18y5bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:qodo"} {...others} />);
}

export default Component;
