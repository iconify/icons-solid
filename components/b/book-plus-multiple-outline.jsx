import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbucz-2oi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbucz-2oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:book-plus-multiple-outline"} {...others} />);
}

export default Component;
