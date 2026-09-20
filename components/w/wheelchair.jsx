import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpfk69-0z.css';
import '../../css/f/fnee-c65g.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rpfk69-0z"/><path class="fnee-c65g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:wheelchair"} {...others} />);
}

export default Component;
