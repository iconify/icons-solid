import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zik-cdbqn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zik-cdbqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gateway-inclusive-alt"} {...others} />);
}

export default Component;
