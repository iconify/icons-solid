import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou92kp7sw.css';
import '../../css/i/iobp--9yq.css';
import '../../css/j/j3otbqcnu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ou92kp7sw"/><path class="iobp--9yq"/><path class="j3otbqcnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:negativesquaredlatincaptialo"} {...others} />);
}

export default Component;
