import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwr2e0b0q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jwr2e0b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:quote"} {...others} />);
}

export default Component;
