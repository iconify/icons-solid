import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvz8bmbev.css';
import '../../css/d/dvmkg2bvp.css';
import '../../css/z/zemfc1i9l.css';
import '../../css/s/sa-6twkud.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dvz8bmbev"/><path class="dvmkg2bvp"/><path class="zemfc1i9l"/><path class="sa-6twkud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:timeful-light"} {...others} />);
}

export default Component;
