import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2y5ycc9l.css';
import '../../css/u/ujx7g2v4v.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="y2y5ycc9l"/><path class="ujx7g2v4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:start"} {...others} />);
}

export default Component;
