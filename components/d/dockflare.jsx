import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lom97gbaa.css';
import '../../css/h/h1tep8bkz.css';
import '../../css/j/juyi11biy.css';
import '../../css/r/r5ke03bht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lom97gbaa"/><path class="h1tep8bkz"/><path class="juyi11biy"/><path class="r5ke03bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockflare"} {...others} />);
}

export default Component;
