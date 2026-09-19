import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aod6y7ztn.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="aod6y7ztn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-up-on-square-20-solid"} {...others} />);
}

export default Component;
