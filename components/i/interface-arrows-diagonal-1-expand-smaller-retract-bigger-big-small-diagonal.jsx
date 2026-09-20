import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv8qdukki.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="dv8qdukki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-diagonal-1-expand-smaller-retract-bigger-big-small-diagonal"} {...others} />);
}

export default Component;
