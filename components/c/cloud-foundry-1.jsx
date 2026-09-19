import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuf0csw1g.css';
import '../../css/y/y3x4cnbio.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wuf0csw1g"/><path class="y3x4cnbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-foundry-1"} {...others} />);
}

export default Component;
