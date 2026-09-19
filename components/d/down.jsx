import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3pbgcg6r.css';
import '../../css/e/e052tbbpy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z3pbgcg6r"/><path class="e052tbbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:down"} {...others} />);
}

export default Component;
