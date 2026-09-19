import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kci5s6b3p.css';

const viewBox = {"width":441,"height":512};
const content = `<path class="kci5s6b3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:dragonflybsd"} {...others} />);
}

export default Component;
