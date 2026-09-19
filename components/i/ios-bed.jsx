import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0po3xb8t.css';
import '../../css/b/bsha2ob5a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x0po3xb8t"/><path class="bsha2ob5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bed"} {...others} />);
}

export default Component;
