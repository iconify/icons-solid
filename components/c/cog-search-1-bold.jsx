import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv572stwh.css';
import '../../css/n/nee9o4w2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kv572stwh"/><path class="nee9o4w2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cog-search-1-bold"} {...others} />);
}

export default Component;
