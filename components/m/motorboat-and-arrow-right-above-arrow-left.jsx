import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd8e2usik.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wd8e2usik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:motorboat-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
