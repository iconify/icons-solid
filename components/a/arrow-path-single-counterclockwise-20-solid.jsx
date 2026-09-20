import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr6pcpboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tr6pcpboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-single-counterclockwise-20-solid"} {...others} />);
}

export default Component;
