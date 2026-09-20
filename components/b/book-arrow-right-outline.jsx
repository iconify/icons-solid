import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gebj2bpbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gebj2bpbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-arrow-right-outline"} {...others} />);
}

export default Component;
