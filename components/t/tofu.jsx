import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0b1pobvd.css';
import '../../css/n/nxk669c7l.css';
import '../../css/g/g147opbuc.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="b0b1pobvd"/><path class="nxk669c7l"/><path class="g147opbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:tofu"} {...others} />);
}

export default Component;
