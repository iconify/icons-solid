import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po44rxx7x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="po44rxx7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:check-double-20-solid"} {...others} />);
}

export default Component;
