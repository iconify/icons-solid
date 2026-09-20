import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiozi-bue.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oiozi-bue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cairn-beside-trail-blazes-top-right"} {...others} />);
}

export default Component;
