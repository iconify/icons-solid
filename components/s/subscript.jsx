import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1lw2cc6p.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="b1lw2cc6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:subscript"} {...others} />);
}

export default Component;
