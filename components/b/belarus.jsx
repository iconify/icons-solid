import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flmdk8oav.css';
import '../../css/t/t-h0v1sjr.css';
import '../../css/a/ajt2cbbjj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="flmdk8oav"/><path class="t-h0v1sjr"/><path class="ajt2cbbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:belarus"} {...others} />);
}

export default Component;
