import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usx2mjb7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="usx2mjb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pouring-chalice"} {...others} />);
}

export default Component;
