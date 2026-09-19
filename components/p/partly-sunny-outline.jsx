import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htohhkvke.css';
import '../../css/b/bixpb61-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="htohhkvke"/><path class="bixpb61-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:partly-sunny-outline"} {...others} />);
}

export default Component;
