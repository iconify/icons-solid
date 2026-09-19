import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn38qzb0f.css';

const viewBox = {"width":1792,"height":1536};
const content = `<g transform="translate(1792 0) scale(-1 1)"><path class="mn38qzb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-o-right"} {...others} />);
}

export default Component;
