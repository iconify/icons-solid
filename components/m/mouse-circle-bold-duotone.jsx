import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sye-2abwi.css';
import '../../css/v/vy68jhl7r.css';
import '../../css/q/q2fevzb2w.css';
import '../../css/f/fbvx_eb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sye-2abwi"/><path class="vy68jhl7r"/><path class="q2fevzb2w"/><path class="fbvx_eb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-bold-duotone"} {...others} />);
}

export default Component;
