import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb_6iza3u.css';
import '../../css/g/gi3nmwdkw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gb_6iza3u"/><path class="gi3nmwdkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:akka-wordmark"} {...others} />);
}

export default Component;
