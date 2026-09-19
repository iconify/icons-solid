import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzs4d4blu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zzs4d4blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:pyscript-wordmark"} {...others} />);
}

export default Component;
