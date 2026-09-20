import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdtr-tgcy.css';
import '../../css/x/xqehzub3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdtr-tgcy"/><path class="xqehzub3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:double-storey-filled"} {...others} />);
}

export default Component;
