import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyj8jf1aw.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="fyj8jf1aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:alien-solid"} {...others} />);
}

export default Component;
