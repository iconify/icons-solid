import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4nw8f58x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b4nw8f58x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:brush-sharp"} {...others} />);
}

export default Component;
