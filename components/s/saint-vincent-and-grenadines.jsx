import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh_u97f-x.css';
import '../../css/f/f5rb8abwp.css';
import '../../css/z/zy0c3b-sv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nh_u97f-x"/><path class="f5rb8abwp"/><path class="zy0c3b-sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:saint-vincent-and-grenadines"} {...others} />);
}

export default Component;
