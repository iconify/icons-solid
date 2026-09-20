import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukvxj4v6o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ukvxj4v6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cairn-beside-trail-blazes-top-left"} {...others} />);
}

export default Component;
