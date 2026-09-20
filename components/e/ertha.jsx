import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0nx1ob-p.css';
import '../../css/g/gxphms4pl.css';
import '../../css/x/xxhhmqarw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0nx1ob-p"/><path clip-rule="evenodd" class="gxphms4pl"/><path class="xxhhmqarw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ertha"} {...others} />);
}

export default Component;
