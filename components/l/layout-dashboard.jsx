import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0n-z98hz.css';
import '../../css/m/mtz7ccm4k.css';
import '../../css/q/q6tsfi25s.css';
import '../../css/k/k0wu1ud0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0n-z98hz"/><path class="mtz7ccm4k"/><path class="q6tsfi25s"/><path class="k0wu1ud0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:layout-dashboard"} {...others} />);
}

export default Component;
