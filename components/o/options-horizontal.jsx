import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2dbmfb2b.css';
import '../../css/g/guczw2b4h.css';
import '../../css/o/o43_bebxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2dbmfb2b"/><path class="guczw2b4h"/><path class="o43_bebxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:options-horizontal"} {...others} />);
}

export default Component;
