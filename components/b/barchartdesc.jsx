import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5e21pb0q.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="p5e21pb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:barchartdesc"} {...others} />);
}

export default Component;
