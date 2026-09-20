import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyipr6b1y.css';
import '../../css/f/fqk1fbbsv.css';

const viewBox = {"width":214.574,"height":41.77,"left":-1.182,"top":-1.182};
const content = `<path class="oyipr6b1y"/><path class="fqk1fbbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wistron"} {...others} />);
}

export default Component;
