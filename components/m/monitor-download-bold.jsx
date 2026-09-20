import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yze9kk29k.css';
import '../../css/v/vojar-box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yze9kk29k"/><path class="vojar-box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-download-bold"} {...others} />);
}

export default Component;
