import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfb6i5b2q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jfb6i5b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:roadmap"} {...others} />);
}

export default Component;
