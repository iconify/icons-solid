import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb44leb3z.css';
import '../../css/s/s_dxuzqlj.css';
import '../../css/l/lct3agv3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pb44leb3z"/><path class="s_dxuzqlj"/><path class="lct3agv3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visernic"} {...others} />);
}

export default Component;
