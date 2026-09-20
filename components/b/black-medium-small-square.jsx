import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh6n15bwy.css';
import '../../css/u/umdrjybhb.css';
import '../../css/b/bw_zhbbpx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bh6n15bwy"/><path class="umdrjybhb"/><path class="bw_zhbbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-medium-small-square"} {...others} />);
}

export default Component;
