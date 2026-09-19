import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em-0n8irn.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="em-0n8irn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:road-circle-check"} {...others} />);
}

export default Component;
