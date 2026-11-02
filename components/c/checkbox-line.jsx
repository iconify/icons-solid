import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axe1i_vwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axe1i_vwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:checkbox-line"} {...others} />);
}

export default Component;
