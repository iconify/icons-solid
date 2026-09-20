import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2tyl-alg.css';
import '../../css/q/q6x95eb8d.css';
import '../../css/k/kt0rrab9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2tyl-alg"/><path class="q6x95eb8d"/><path class="kt0rrab9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:show-theater-masks-bold"} {...others} />);
}

export default Component;
