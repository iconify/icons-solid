import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea5qyqbox.css';
import '../../css/d/dt2gkbchm.css';
import '../../css/v/vhwau7bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ea5qyqbox wm-a"/><path class="dt2gkbchm wm-k"/><path class="vhwau7bwl wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:route"} {...others} />);
}

export default Component;
