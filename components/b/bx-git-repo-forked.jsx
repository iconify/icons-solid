import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e99tndktk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e99tndktk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-git-repo-forked"} {...others} />);
}

export default Component;
