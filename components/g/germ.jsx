import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w93hj8b3t.css';
import '../../css/p/px5xiwqdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w93hj8b3t"/><circle class="px5xiwqdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:germ"} {...others} />);
}

export default Component;
