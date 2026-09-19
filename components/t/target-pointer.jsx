import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpuge3-7o.css';
import '../../css/t/t_ss00lhg.css';
import '../../css/f/f-az1xj8s.css';
import '../../css/s/sm5zcymkz.css';
import '../../css/z/z08yn9bek.css';

const viewBox = {"width":84,"height":84};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hpuge3-7o"/><path clip-rule="evenodd" class="t_ss00lhg"/><path clip-rule="evenodd" class="f-az1xj8s"/><path clip-rule="evenodd" class="sm5zcymkz"/><path class="z08yn9bek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:target-pointer"} {...others} />);
}

export default Component;
