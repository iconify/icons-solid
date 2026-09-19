import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/e/ed3jfhbno.css';
import '../../css/t/t_yzewwok.css';
import '../../css/c/cufzp3bqg.css';
import '../../css/e/e7wi9ccpv.css';
import '../../css/f/fqb-do69b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="ed3jfhbno"/><path class="t_yzewwok"/><path class="cufzp3bqg"/><path class="e7wi9ccpv"/><path class="fqb-do69b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ls-1x1"} {...others} />);
}

export default Component;
