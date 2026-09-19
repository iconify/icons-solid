import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2yezpb3v.css';

const viewBox = {"width":210,"height":700};
const content = `<path class="b2yezpb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:small-arrow-left"} {...others} />);
}

export default Component;
