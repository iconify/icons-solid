import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po68ny4my.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="po68ny4my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:on-holiday-solid"} {...others} />);
}

export default Component;
