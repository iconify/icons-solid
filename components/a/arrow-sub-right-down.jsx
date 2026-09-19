import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrb1y4wkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrb1y4wkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-sub-right-down"} {...others} />);
}

export default Component;
