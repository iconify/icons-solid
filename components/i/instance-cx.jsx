import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8kuy_ape.css';
import '../../css/z/z0z1a0aie.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="c8kuy_ape"/><path class="z0z1a0aie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:instance-cx"} {...others} />);
}

export default Component;
