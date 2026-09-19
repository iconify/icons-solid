import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0m-rizhq.css';
import '../../css/z/z0wxf4bfs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p0m-rizhq"/><path class="z0wxf4bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:school-sharp"} {...others} />);
}

export default Component;
