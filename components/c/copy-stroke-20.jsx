import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx0i85btj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mx0i85btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:copy-stroke-20"} {...others} />);
}

export default Component;
