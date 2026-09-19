import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyfik8bhq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kyfik8bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deployment-unit-installation"} {...others} />);
}

export default Component;
