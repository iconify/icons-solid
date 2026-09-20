import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilw1vqb3q.css';
import '../../css/n/ndpi73byy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilw1vqb3q"/><path class="ndpi73byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:tracked-by-closed-not-planned-24"} {...others} />);
}

export default Component;
