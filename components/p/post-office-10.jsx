import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as1jbkb3n.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="as1jbkb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:post-office-10"} {...others} />);
}

export default Component;
