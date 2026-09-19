import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcw5r9b9i.css';
import '../../css/j/jtvessbvn.css';
import '../../css/o/oxb2pjboe.css';
import '../../css/b/bo1s8jdel.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gcw5r9b9i"/><path class="jtvessbvn"/><path class="oxb2pjboe"/><path class="bo1s8jdel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:questions"} {...others} />);
}

export default Component;
