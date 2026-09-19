import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe6x8nbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oe6x8nbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:slider-vertical-alt"} {...others} />);
}

export default Component;
