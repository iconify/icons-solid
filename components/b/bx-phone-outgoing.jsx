import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axg1wdx3v.css';
import '../../css/n/n5p315boc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axg1wdx3v"/><path class="n5p315boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-phone-outgoing"} {...others} />);
}

export default Component;
