import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlg8d3b5q.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="dlg8d3b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:bug-fill"} {...others} />);
}

export default Component;
