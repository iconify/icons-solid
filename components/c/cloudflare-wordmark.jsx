import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4h2k05ja.css';
import '../../css/u/uqpui-bgw.css';
import '../../css/h/hiiiijb5v.css';
import '../../css/g/g9wxr7i5b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p4h2k05ja"/><path class="uqpui-bgw"/><path class="hiiiijb5v"/><path class="g9wxr7i5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cloudflare-wordmark"} {...others} />);
}

export default Component;
