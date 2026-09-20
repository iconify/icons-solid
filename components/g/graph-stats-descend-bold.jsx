import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn279sbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bn279sbtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:graph-stats-descend-bold"} {...others} />);
}

export default Component;
