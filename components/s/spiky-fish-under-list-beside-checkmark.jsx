import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5ny2v5ma.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r5ny2v5ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spiky-fish-under-list-beside-checkmark"} {...others} />);
}

export default Component;
