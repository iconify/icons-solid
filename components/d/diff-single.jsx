import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5_5zcc8m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o5_5zcc8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:diff-single"} {...others} />);
}

export default Component;
