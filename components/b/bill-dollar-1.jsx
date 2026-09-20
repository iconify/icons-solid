import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aq9czdb1r.css';
import '../../css/t/tdz9psbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aq9czdb1r"/><path class="tdz9psbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bill-dollar-1"} {...others} />);
}

export default Component;
