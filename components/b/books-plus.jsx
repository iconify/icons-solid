import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0bdxl2ii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0bdxl2ii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:books-plus"} {...others} />);
}

export default Component;
