import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3qka0b_e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e3qka0b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:water-tap-with-handle-and-drinking-glass"} {...others} />);
}

export default Component;
