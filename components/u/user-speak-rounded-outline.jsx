import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow3ooltuw.css';
import '../../css/h/hsy303b0e.css';
import '../../css/v/vfkp8cb2v.css';
import '../../css/c/c8mwtbcpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow3ooltuw"/><path clip-rule="evenodd" class="hsy303b0e"/><path clip-rule="evenodd" class="vfkp8cb2v"/><path class="c8mwtbcpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-rounded-outline"} {...others} />);
}

export default Component;
