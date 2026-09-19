import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk-zpbcpt.css';
import '../../css/v/v1-2libes.css';
import '../../css/g/g3rbux_4u.css';
import '../../css/a/arjsqib7z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wk-zpbcpt"/><path class="v1-2libes"/><path class="g3rbux_4u"/><path class="arjsqib7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:thymeleaf-wordmark"} {...others} />);
}

export default Component;
