import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_h32ggwa.css';
import '../../css/y/yka_8gutb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_h32ggwa"/><path class="yka_8gutb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-graph-bold"} {...others} />);
}

export default Component;
