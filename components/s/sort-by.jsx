import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpkdf3o7h.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="vpkdf3o7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:sort-by"} {...others} />);
}

export default Component;
