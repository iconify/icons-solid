import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd2r3fwxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd2r3fwxt primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:repeat-once-duotone"} {...others} />);
}

export default Component;
