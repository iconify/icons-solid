import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8f9lbbka.css';
import '../../css/i/iah3itbam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x8f9lbbka"/><path class="iah3itbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-minimalistic-line-duotone"} {...others} />);
}

export default Component;
