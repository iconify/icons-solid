import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmfkg_j2b.css';
import '../../css/z/z0r2h759q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="mmfkg_j2b"/><path class="z0r2h759q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-check"} {...others} />);
}

export default Component;
