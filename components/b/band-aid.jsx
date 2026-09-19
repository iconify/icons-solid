import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spjx-7o2o.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="spjx-7o2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:band-aid"} {...others} />);
}

export default Component;
