import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8rxm1btm.css';
import '../../css/j/ji5_h82hg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b8rxm1btm"/><path class="ji5_h82hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:harddrive-o"} {...others} />);
}

export default Component;
