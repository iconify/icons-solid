import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogrunjuwo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ogrunjuwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sea-lion-and-whistle"} {...others} />);
}

export default Component;
