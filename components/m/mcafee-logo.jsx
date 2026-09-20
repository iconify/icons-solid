import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uufxf9bma.css';
import '../../css/p/p8amckbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uufxf9bma"/><path class="p8amckbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:mcafee-logo"} {...others} />);
}

export default Component;
