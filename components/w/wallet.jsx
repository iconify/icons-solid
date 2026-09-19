import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ex_avpbej.css';
import '../../css/t/trdt80b2a.css';
import '../../css/d/d8m1e2myi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ex_avpbej"/><path class="trdt80b2a"/><path class="d8m1e2myi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wallet"} {...others} />);
}

export default Component;
