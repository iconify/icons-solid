import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9ts_gbgo.css';
import '../../css/e/eve76ufxm.css';
import '../../css/c/crzx6podm.css';
import '../../css/f/fm-1f-6la.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r9ts_gbgo"/><path class="eve76ufxm"/><path class="crzx6podm"/><path class="fm-1f-6la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:basil"} {...others} />);
}

export default Component;
