import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijx_gn60x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijx_gn60x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:asterisk-line"} {...others} />);
}

export default Component;
