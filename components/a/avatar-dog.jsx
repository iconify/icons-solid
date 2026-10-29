import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h8409hbjw.css';
import '../../css/s/s_yi55lkp.css';
import '../../css/g/g-gbdnbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h8409hbjw"/><path class="s_yi55lkp"/><path class="g-gbdnbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-dog"} {...others} />);
}

export default Component;
