import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk8wbdc9i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hk8wbdc9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:redo-16"} {...others} />);
}

export default Component;
