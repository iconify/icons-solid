import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bi92fxdfc.css';
import '../../css/q/qchh_o2bi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bi92fxdfc"/><path class="qchh_o2bi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:customer-support-setting"} {...others} />);
}

export default Component;
