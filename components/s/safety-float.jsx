import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzt4l3b4d.css';
import '../../css/n/nqa54_bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nzt4l3b4d"/><path class="nqa54_bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-float"} {...others} />);
}

export default Component;
