import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7xcoth-m.css';
import '../../css/x/x-5p19nze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7xcoth-m"/><path class="x-5p19nze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:lyft"} {...others} />);
}

export default Component;
