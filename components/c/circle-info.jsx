import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnrc7_bry.css';
import '../../css/y/yjt-ee8as.css';
import '../../css/h/hrhhzjb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tnrc7_bry"/><path class="yjt-ee8as"/><path class="hrhhzjb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-info"} {...others} />);
}

export default Component;
