import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/grkz9wbom.css';
import '../../css/d/dl2t0oowd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="grkz9wbom"/><path class="dl2t0oowd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:floppy-disk"} {...others} />);
}

export default Component;
