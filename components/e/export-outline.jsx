import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/x9jqffgeb.css';
import '../../css/x/x225i6bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="x9jqffgeb"/><path class="x225i6bmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:export-outline"} {...others} />);
}

export default Component;
