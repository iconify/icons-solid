import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjw0j7b5s.css';
import '../../css/l/ll6-1jbrc.css';
import '../../css/w/wd3cbw0zu.css';
import '../../css/z/zilhnylyb.css';
import '../../css/r/rko52wi9e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gjw0j7b5s"/><path class="ll6-1jbrc"/><path class="wd3cbw0zu"/><path class="zilhnylyb"/><path class="rko52wi9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:deployment-pattern"} {...others} />);
}

export default Component;
