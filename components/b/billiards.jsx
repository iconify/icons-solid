import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjp3m3bor.css';
import '../../css/t/tn3ef2i2f.css';
import '../../css/b/b2fgv7b-a.css';
import '../../css/w/we48irbvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gjp3m3bor"/><path class="tn3ef2i2f"/><path class="b2fgv7b-a"/><path class="we48irbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:billiards"} {...others} />);
}

export default Component;
