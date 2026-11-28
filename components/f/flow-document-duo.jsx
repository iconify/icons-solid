import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4qsytige.css';
import '../../css/i/i3jzowbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e4qsytige secondary"/><path class="i3jzowbmb primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-document-duo"} {...others} />);
}

export default Component;
