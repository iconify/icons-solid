import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu5b3g62n.css';
import '../../css/l/lkpw8_1oe.css';
import '../../css/h/h2dm1dbhq.css';
import '../../css/i/inyn20bez.css';
import '../../css/o/o9hbr2ndk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cu5b3g62n"/><path class="lkpw8_1oe"/><path class="h2dm1dbhq"/><path class="inyn20bez"/><path class="o9hbr2ndk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:twistedrightwardsarrows"} {...others} />);
}

export default Component;
