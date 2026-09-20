import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rccltgwpt.css';
import '../../css/b/bg4qdp5ho.css';
import '../../css/o/o-2211bzh.css';
import '../../css/v/vg5zmbblx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rccltgwpt"/><path class="bg4qdp5ho"/><path class="o-2211bzh"/><path class="vg5zmbblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sando"} {...others} />);
}

export default Component;
