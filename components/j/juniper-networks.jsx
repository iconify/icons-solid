import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz8d8p7vg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz8d8p7vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:juniper-networks"} {...others} />);
}

export default Component;
