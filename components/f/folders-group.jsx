import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdsyzfbog.css';
import '../../css/v/v_wzngb0a.css';
import '../../css/k/k8qe7j0ev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fdsyzfbog"/><path class="v_wzngb0a"/><path class="k8qe7j0ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folders-group"} {...others} />);
}

export default Component;
