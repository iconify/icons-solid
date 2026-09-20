import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elt0apgww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="elt0apgww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:future"} {...others} />);
}

export default Component;
