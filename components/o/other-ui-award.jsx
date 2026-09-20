import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo5-5tayx.css';
import '../../css/a/ars70-b2s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vo5-5tayx"/><path clip-rule="evenodd" class="ars70-b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-award"} {...others} />);
}

export default Component;
