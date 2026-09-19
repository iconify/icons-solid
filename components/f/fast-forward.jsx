import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u65hmsmhq.css';

const viewBox = {"width":1792,"height":1536};
const content = `<g transform="translate(1792 0) scale(-1 1)"><path class="u65hmsmhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:fast-forward"} {...others} />);
}

export default Component;
