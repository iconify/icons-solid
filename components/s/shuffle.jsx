import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3mw5zbrj.css';
import '../../css/l/lf7w2ibjf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="d3mw5zbrj"/><path class="lf7w2ibjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:shuffle"} {...others} />);
}

export default Component;
