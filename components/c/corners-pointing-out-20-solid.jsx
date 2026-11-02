import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_76ry0sr.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="i_76ry0sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:corners-pointing-out-20-solid"} {...others} />);
}

export default Component;
