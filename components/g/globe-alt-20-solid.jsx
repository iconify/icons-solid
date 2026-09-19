import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2p5n4w2t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m2p5n4w2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:globe-alt-20-solid"} {...others} />);
}

export default Component;
