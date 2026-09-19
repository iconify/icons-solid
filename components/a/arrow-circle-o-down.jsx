import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-922rvxz.css';

const viewBox = {"width":1536,"height":1536};
const content = `<g transform="translate(0 1536) scale(1 -1)"><path class="b-922rvxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:arrow-circle-o-down"} {...others} />);
}

export default Component;
