import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3l7nk5td.css';
import '../../css/e/e3oc5fb-n.css';
import '../../css/f/f_orwkojd.css';
import '../../css/y/yy9bcwbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3l7nk5td"/><path class="e3oc5fb-n"/><path class="f_orwkojd"/><path class="yy9bcwbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cast-filled"} {...others} />);
}

export default Component;
