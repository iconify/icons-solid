import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6l2z7b3n.css';
import '../../css/m/mx4-meb8l.css';
import '../../css/j/j4e8r8b1o.css';
import '../../css/n/njwn_tbgs.css';
import '../../css/i/i367zvbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6l2z7b3n"/><path class="mx4-meb8l"/><path class="j4e8r8b1o"/><path class="njwn_tbgs"/><path class="i367zvbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dall-e-openai"} {...others} />);
}

export default Component;
