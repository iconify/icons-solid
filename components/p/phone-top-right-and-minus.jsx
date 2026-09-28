import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anw-b9pqs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="anw-b9pqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-top-right-and-minus"} {...others} />);
}

export default Component;
