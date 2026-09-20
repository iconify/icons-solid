import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9_cmhbvy.css';
import '../../css/y/yu8tkqs3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q9_cmhbvy"/><path class="yu8tkqs3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:light-skin-tone"} {...others} />);
}

export default Component;
