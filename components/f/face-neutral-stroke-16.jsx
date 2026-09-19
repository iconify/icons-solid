import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu8rf9bvt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wu8rf9bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:face-neutral-stroke-16"} {...others} />);
}

export default Component;
