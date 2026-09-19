import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb2e_5bth.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="pb2e_5bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sort-alpha-up"} {...others} />);
}

export default Component;
