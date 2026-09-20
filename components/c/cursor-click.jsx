import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/s19kf6b2h.css';
import '../../css/i/ic4xmgbhb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="s19kf6b2h"/><path class="ic4xmgbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cursor-click"} {...others} />);
}

export default Component;
