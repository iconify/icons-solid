import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aje1gjofx.css';
import '../../css/z/z2xdwcchy.css';
import '../../css/o/o-9st-ttp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aje1gjofx"/><path class="z2xdwcchy"/><path class="o-9st-ttp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:server-sharp"} {...others} />);
}

export default Component;
