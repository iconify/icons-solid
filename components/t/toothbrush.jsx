import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iormuebre.css';
import '../../css/f/fzppklb-k.css';
import '../../css/p/p0rwbubiw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="iormuebre"/><path class="fzppklb-k"/><path class="p0rwbubiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:toothbrush"} {...others} />);
}

export default Component;
