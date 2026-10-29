import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvxzpacfj.css';
import '../../css/c/ct7sk1bjh.css';
import '../../css/q/q0_8skbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvxzpacfj wm-k"/><path class="ct7sk1bjh wm-k"/><path class="q0_8skbgb wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thermometer"} {...others} />);
}

export default Component;
