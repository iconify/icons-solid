import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1-rs1b4l.css';
import '../../css/s/sga3esc_s.css';
import '../../css/y/y-1brd5iy.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="z1-rs1b4l"/><path class="sga3esc_s"/><path class="y-1brd5iy"/><circle class="lmf0ecbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-outline-badged"} {...others} />);
}

export default Component;
