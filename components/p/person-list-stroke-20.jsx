import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx6xpabsn.css';
import '../../css/a/aovmzshjn.css';
import '../../css/a/ab5r28h8z.css';
import '../../css/y/yw8l68yim.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qx6xpabsn"/><path class="aovmzshjn"/><path class="ab5r28h8z"/><path class="yw8l68yim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-list-stroke-20"} {...others} />);
}

export default Component;
