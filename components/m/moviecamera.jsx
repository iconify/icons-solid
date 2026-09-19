import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcpw2q4gb.css';
import '../../css/a/abq2l722c.css';
import '../../css/l/l10h6ebue.css';
import '../../css/v/vvlkjabbs.css';
import '../../css/m/myp7udbnu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qcpw2q4gb"/><path class="abq2l722c"/><path class="l10h6ebue"/><circle class="vvlkjabbs"/><path class="myp7udbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:moviecamera"} {...others} />);
}

export default Component;
