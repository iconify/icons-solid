import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thgsep5_e.css';
import '../../css/i/ift-4msrf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="thgsep5_e"/><path class="ift-4msrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-creation"} {...others} />);
}

export default Component;
