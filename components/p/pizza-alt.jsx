import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2pq0ccjr.css';
import '../../css/d/di12r_hgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b2pq0ccjr"/><path class="di12r_hgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pizza-alt"} {...others} />);
}

export default Component;
