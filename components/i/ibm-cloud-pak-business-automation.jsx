import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spat6qbum.css';
import '../../css/g/ga5ow5xim.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="spat6qbum"/><path class="ga5ow5xim"/><path class="x8r3bo3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-pak-business-automation"} {...others} />);
}

export default Component;
