import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb0rxhbzc.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="gb0rxhbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:corners-pointing-in-20-solid"} {...others} />);
}

export default Component;
