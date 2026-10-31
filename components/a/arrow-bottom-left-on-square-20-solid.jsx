import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqdmo49vt.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="cqdmo49vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-bottom-left-on-square-20-solid"} {...others} />);
}

export default Component;
