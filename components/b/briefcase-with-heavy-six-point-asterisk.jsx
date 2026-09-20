import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3kj7i7gu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p3kj7i7gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-heavy-six-point-asterisk"} {...others} />);
}

export default Component;
