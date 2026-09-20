import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e33o32mlm.css';
import '../../css/f/fljfjc3fd.css';
import '../../css/s/s3pf4tyyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e33o32mlm"/><path class="fljfjc3fd"/><path class="s3pf4tyyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:group8-filled"} {...others} />);
}

export default Component;
