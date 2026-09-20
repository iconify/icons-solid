import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js5fj-07l.css';
import '../../css/f/f9q19ybhs.css';
import '../../css/w/w-zx9_bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="js5fj-07l"/><path class="f9q19ybhs"/><path class="w-zx9_bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:key-duotone"} {...others} />);
}

export default Component;
