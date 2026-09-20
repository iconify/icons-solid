import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhtcn6u1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nhtcn6u1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:minus-network"} {...others} />);
}

export default Component;
