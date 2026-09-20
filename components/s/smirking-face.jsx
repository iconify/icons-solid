import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/z/zl50wac4b.css';
import '../../css/q/qzdo7vngp.css';
import '../../css/w/weaftlw2e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><circle class="zl50wac4b"/><path class="qzdo7vngp"/><path class="weaftlw2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smirking-face"} {...others} />);
}

export default Component;
