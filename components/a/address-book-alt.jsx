import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/andt_0b7s.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="andt_0b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:address-book-alt"} {...others} />);
}

export default Component;
