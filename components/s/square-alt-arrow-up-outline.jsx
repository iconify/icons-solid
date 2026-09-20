import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdk5irq0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kdk5irq0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-alt-arrow-up-outline"} {...others} />);
}

export default Component;
