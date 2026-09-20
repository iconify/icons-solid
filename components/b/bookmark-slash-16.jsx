import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0h--2odr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z0h--2odr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:bookmark-slash-16"} {...others} />);
}

export default Component;
