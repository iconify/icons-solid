import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kclhqr.css';
import '../../css/y/ydovum.css';
import '../../css/j/jmnoxq.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-45nhxp.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-from-0px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kclhqr ydovum"/><circle class="jmnoxq ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:watch-twotone"} {...others} />);
}

export default Component;
