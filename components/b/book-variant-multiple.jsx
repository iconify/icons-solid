import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcc-r0bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tcc-r0bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-variant-multiple"} {...others} />);
}

export default Component;
