import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/g/gslr97yjg.css';
import '../../css/e/ec1sk488t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="gslr97yjg"/><path class="ec1sk488t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zodiac-6"} {...others} />);
}

export default Component;
