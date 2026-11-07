import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cng445bcg.css';
import '../../css/p/pzkg8kb5w.css';
import '../../css/t/t5jp7s4kx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cng445bcg"/><path class="pzkg8kb5w"/><path class="t5jp7s4kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-bold"} {...others} />);
}

export default Component;
