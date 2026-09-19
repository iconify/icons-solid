import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7w8ann-p.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="n7w8ann-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:earlybirds"} {...others} />);
}

export default Component;
