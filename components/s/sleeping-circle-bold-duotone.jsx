import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo8-9cb-i.css';
import '../../css/q/qsc1wcf4m.css';
import '../../css/b/bhj2g24rh.css';
import '../../css/b/bau2vbc2j.css';
import '../../css/d/dszgb7nxa.css';
import '../../css/h/h0cp9fbad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo8-9cb-i"/><path class="qsc1wcf4m"/><path class="bhj2g24rh"/><path class="bau2vbc2j"/><path class="dszgb7nxa"/><path class="h0cp9fbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-circle-bold-duotone"} {...others} />);
}

export default Component;
