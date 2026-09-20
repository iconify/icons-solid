import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhx6pibvk.css';
import '../../css/b/b1w3ycbdv.css';
import '../../css/u/uk_v7bife.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="mhx6pibvk"><path class="b1w3ycbdv"/><path class="uk_v7bife"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:slack"} {...others} />);
}

export default Component;
