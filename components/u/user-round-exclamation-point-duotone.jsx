import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlcvyh7fb.css';
import '../../css/t/ty-zitbel.css';
import '../../css/i/ig-kolbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zlcvyh7fb"/><path class="ty-zitbel"/><path class="ig-kolbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-exclamation-point-duotone"} {...others} />);
}

export default Component;
