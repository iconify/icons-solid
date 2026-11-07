import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0nj5essx.css';
import '../../css/t/tl8qmubzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0nj5essx"/><path class="tl8qmubzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-bold"} {...others} />);
}

export default Component;
