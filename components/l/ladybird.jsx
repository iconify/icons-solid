import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjtlbw2qm.css';
import '../../css/d/dlomshbcq.css';

const viewBox = {"width":238.125,"height":238.125};
const content = `<circle class="bjtlbw2qm"/><path class="dlomshbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ladybird"} {...others} />);
}

export default Component;
