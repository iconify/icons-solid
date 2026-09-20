import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abql3zbgy.css';
import '../../css/s/sqe3p6fhr.css';
import '../../css/g/gm_9k9b0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="abql3zbgy"/><path class="sqe3p6fhr"/><path clip-rule="evenodd" class="gm_9k9b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:speaker-2-flat"} {...others} />);
}

export default Component;
