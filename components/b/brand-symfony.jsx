import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjhhuol4l.css';
import '../../css/p/p5e1pwbqo.css';
import '../../css/c/ct1w4pbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yjhhuol4l"/><path class="p5e1pwbqo"/><path class="ct1w4pbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-symfony"} {...others} />);
}

export default Component;
