import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcbt7yjkc.css';
import '../../css/s/sq6-edbzr.css';
import '../../css/b/bgw48cfvv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xcbt7yjkc"/><path class="sq6-edbzr"/><path class="bgw48cfvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:labview"} {...others} />);
}

export default Component;
