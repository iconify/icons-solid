import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn-2cioxv.css';
import '../../css/m/m4unhhbun.css';
import '../../css/q/qa8-8s9mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rn-2cioxv"/><path class="m4unhhbun"/><path class="qa8-8s9mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-add"} {...others} />);
}

export default Component;
