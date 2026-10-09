import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzf2d5c2n.css';
import '../../css/t/tox1-wblc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wzf2d5c2n"/><path class="tox1-wblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wallet-20"} {...others} />);
}

export default Component;
