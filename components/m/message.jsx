import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfj4xhnmo.css';
import '../../css/f/f2-nhmb4x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rfj4xhnmo"/><path class="f2-nhmb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:message"} {...others} />);
}

export default Component;
