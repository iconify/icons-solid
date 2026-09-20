import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zur5tsb7z.css';
import '../../css/p/p-38xzm7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zur5tsb7z"/><path class="p-38xzm7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticc-dash"} {...others} />);
}

export default Component;
