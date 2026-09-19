import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cfxgltjsz.css';
import '../../css/f/f8rwt8bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cfxgltjsz"/><path class="f8rwt8bcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-update-01"} {...others} />);
}

export default Component;
