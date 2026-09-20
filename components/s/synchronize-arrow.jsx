import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyn_rlidk.css';
import '../../css/t/tf7shdc3w.css';
import '../../css/j/j96eedb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fyn_rlidk"/><path class="tf7shdc3w"/><path class="j96eedb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:synchronize-arrow"} {...others} />);
}

export default Component;
