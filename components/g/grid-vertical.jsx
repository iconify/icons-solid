import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm-lq5bgv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dm-lq5bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:grid-vertical"} {...others} />);
}

export default Component;
