import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlvo0thnk.css';
import '../../css/i/iih3otspu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vlvo0thnk"/><path class="iih3otspu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-watson-machine-learning"} {...others} />);
}

export default Component;
