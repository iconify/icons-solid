import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8hypz94q.css';
import '../../css/c/cedycybln.css';
import '../../css/w/w-dz0bcca.css';
import '../../css/p/ps1b3l81h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z8hypz94q"/><path class="cedycybln"/><path class="w-dz0bcca"/><path class="ps1b3l81h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:button-stop"} {...others} />);
}

export default Component;
