import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn2kzkb-v.css';
import '../../css/n/ntpo6523f.css';
import '../../css/z/z4ynvm7it.css';
import '../../css/a/aqu_-tb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cn2kzkb-v"/><path class="ntpo6523f"/><path class="z4ynvm7it"/><path class="aqu_-tb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:peace"} {...others} />);
}

export default Component;
