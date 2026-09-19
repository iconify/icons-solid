import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/r/r6mnptbmf.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="r6mnptbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:clock"} {...others} />);
}

export default Component;
