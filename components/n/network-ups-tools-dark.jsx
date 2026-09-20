import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1r2axovm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x1r2axovm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:network-ups-tools-dark"} {...others} />);
}

export default Component;
