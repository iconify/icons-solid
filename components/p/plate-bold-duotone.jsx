import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpmwkf-7z.css';
import '../../css/f/fl2kpnyol.css';
import '../../css/w/wk6b4ib4t.css';
import '../../css/u/u28u1dcvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gpmwkf-7z"/><path class="fl2kpnyol"/><path class="wk6b4ib4t"/><path class="u28u1dcvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plate-bold-duotone"} {...others} />);
}

export default Component;
