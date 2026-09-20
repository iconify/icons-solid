import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b186tqo6j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b186tqo6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:memorial-stone-with-latin-cross"} {...others} />);
}

export default Component;
