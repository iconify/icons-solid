import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp3yqspdz.css';

const viewBox = {"width":576,"height":1280};
const content = `<g transform="translate(576 0) scale(-1 1)"><path class="fp3yqspdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:caret-right"} {...others} />);
}

export default Component;
