import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p29xtbdsy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p29xtbdsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bag-of-trash"} {...others} />);
}

export default Component;
