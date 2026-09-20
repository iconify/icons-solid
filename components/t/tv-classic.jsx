import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxqc2gpso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxqc2gpso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tv-classic"} {...others} />);
}

export default Component;
