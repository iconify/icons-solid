import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joehd8b7w.css';

const viewBox = {"width":42,"height":42};
const content = `<path class="joehd8b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"topcoat:wordpress"} {...others} />);
}

export default Component;
