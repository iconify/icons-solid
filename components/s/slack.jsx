import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uk_v7bife.css';
import '../../css/b/b1w3ycbdv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="uk_v7bife"/><path class="b1w3ycbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:slack"} {...others} />);
}

export default Component;
