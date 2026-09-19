import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdypsia2b.css';
import '../../css/h/hztfv9bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdypsia2b"/><path class="hztfv9bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:templates-outlined"} {...others} />);
}

export default Component;
