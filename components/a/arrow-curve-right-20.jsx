import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttz5xjg0j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ttz5xjg0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-curve-right-20"} {...others} />);
}

export default Component;
