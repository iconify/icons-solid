import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzt8tcrza.css';

const viewBox = {"width":16,"height":16,"top":-16};
const content = `<path class="zzt8tcrza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:gnuplot"} {...others} />);
}

export default Component;
