import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyyvzf4ru.css';
import '../../css/v/vlxt_3bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyyvzf4ru"/><path class="vlxt_3bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:corner-down-right"} {...others} />);
}

export default Component;
