import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-s-y5s8p.css';
import '../../css/w/w_-ne2bhl.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="u-s-y5s8p"/><path class="w_-ne2bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deployment-canary"} {...others} />);
}

export default Component;
