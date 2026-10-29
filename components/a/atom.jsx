import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjhi1nb3h.css';
import '../../css/v/vtl91obdm.css';
import '../../css/b/bwrwnlb7x.css';
import '../../css/c/cnrul6y8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjhi1nb3h wm-k"/><path class="vtl91obdm wm-k"/><path class="bwrwnlb7x wm-k"/><path class="cnrul6y8o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:atom"} {...others} />);
}

export default Component;
