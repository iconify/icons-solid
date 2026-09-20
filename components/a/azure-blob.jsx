import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avsmaub8q.css';

const viewBox = {"width":41.754,"height":48.143};
const content = `<path class="avsmaub8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:azure-blob"} {...others} />);
}

export default Component;
