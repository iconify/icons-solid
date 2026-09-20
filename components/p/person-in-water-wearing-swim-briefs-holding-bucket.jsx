import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj9vsub_d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uj9vsub_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-in-water-wearing-swim-briefs-holding-bucket"} {...others} />);
}

export default Component;
