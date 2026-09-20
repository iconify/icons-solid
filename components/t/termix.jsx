import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufwqrnbxh.css';
import '../../css/p/pgs89cb6b.css';
import '../../css/s/s_6fbubyx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ufwqrnbxh"/><path class="pgs89cb6b"/><path class="s_6fbubyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:termix"} {...others} />);
}

export default Component;
