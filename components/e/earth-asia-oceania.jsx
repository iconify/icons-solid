import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx5v6zsnz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lx5v6zsnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:earth-asia-oceania"} {...others} />);
}

export default Component;
