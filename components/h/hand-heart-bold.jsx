import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgs-libjk.css';
import '../../css/o/oam048mkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgs-libjk"/><path class="oam048mkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-heart-bold"} {...others} />);
}

export default Component;
