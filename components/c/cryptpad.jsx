import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwakcgbjk.css';
import '../../css/j/jhj59op0p.css';
import '../../css/x/xdwsunbah.css';
import '../../css/o/obtnfmjhe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wwakcgbjk"/><path class="jhj59op0p"/><path class="xdwsunbah"/><path class="obtnfmjhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cryptpad"} {...others} />);
}

export default Component;
