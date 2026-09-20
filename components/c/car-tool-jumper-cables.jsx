import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w--7pubbl.css';
import '../../css/j/jfp7e7xsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w--7pubbl"/><path class="jfp7e7xsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-tool-jumper-cables"} {...others} />);
}

export default Component;
