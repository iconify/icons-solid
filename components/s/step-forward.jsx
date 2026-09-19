import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0_u48bns.css';

const viewBox = {"width":1024,"height":1536};
const content = `<g transform="translate(1024 0) scale(-1 1)"><path class="u0_u48bns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:step-forward"} {...others} />);
}

export default Component;
