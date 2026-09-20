import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edgnwna1c.css';
import '../../css/e/earwreboe.css';
import '../../css/w/w-cy9ebus.css';
import '../../css/w/wajvew1vr.css';
import '../../css/r/rstbl2blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="edgnwna1c"/><path class="earwreboe"/><path clip-rule="evenodd" class="w-cy9ebus"/><path class="wajvew1vr"/><path class="rstbl2blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:h2o"} {...others} />);
}

export default Component;
