import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9vj8vb-t.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="c9vj8vb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:x-square"} {...others} />);
}

export default Component;
