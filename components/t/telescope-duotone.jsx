import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpnd9lbjp.css';
import '../../css/g/gqykg4buz.css';
import '../../css/w/w6vmw__do.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hpnd9lbjp"/><path class="gqykg4buz"/><path class="w6vmw__do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:telescope-duotone"} {...others} />);
}

export default Component;
