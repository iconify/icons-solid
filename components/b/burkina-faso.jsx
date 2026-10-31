import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx_xvr4ug.css';
import '../../css/y/y70x02bra.css';
import '../../css/l/lmzttacpx.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wx_xvr4ug"/><path class="y70x02bra"/><path class="lmzttacpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:burkina-faso"} {...others} />);
}

export default Component;
