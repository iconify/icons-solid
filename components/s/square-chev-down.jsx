import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o76egzb2i.css';
import '../../css/p/pu-6-0j8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o76egzb2i"/><path class="pu-6-0j8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-chev-down"} {...others} />);
}

export default Component;
