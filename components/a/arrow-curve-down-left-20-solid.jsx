import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9he1_b0r.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="d9he1_b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-curve-down-left-20-solid"} {...others} />);
}

export default Component;
