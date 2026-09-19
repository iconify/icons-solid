import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckwx5iwly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckwx5iwly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:fire-gem"} {...others} />);
}

export default Component;
