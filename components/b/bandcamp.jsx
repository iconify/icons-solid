import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5xb6efyw.css';
import '../../css/h/hxjqz7bii.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v5xb6efyw"/><path class="hxjqz7bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bandcamp"} {...others} />);
}

export default Component;
