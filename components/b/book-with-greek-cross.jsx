import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9iqw6b3r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z9iqw6b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:book-with-greek-cross"} {...others} />);
}

export default Component;
