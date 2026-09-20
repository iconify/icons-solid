import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uncoc-6_u.css';
import '../../css/f/f5_79e61z.css';
import '../../css/o/on2c13b9s.css';
import '../../css/t/tb3qivbce.css';
import '../../css/y/ydxi2_19l.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/z7sen1bfz.css';
import '../../css/n/nhm9_-bje.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="uncoc-6_u"><circle class="f5_79e61z"/><path class="on2c13b9s"/><circle class="tb3qivbce"/><path class="ydxi2_19l"/></g><g class="jn8qy4bru"><circle class="f5_79e61z"/><path class="z7sen1bfz"/><circle class="tb3qivbce"/><path class="nhm9_-bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:family-adult-child"} {...others} />);
}

export default Component;
