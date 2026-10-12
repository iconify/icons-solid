import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w79r3bb5w.css';
import '../../css/w/wsruu-p6i.css';
import '../../css/x/xwdhawfba.css';
import '../../css/c/c-ce2-joc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w79r3bb5w"/><path class="wsruu-p6i"/><path class="xwdhawfba"/><path class="c-ce2-joc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-plus-20-bold"} {...others} />);
}

export default Component;
