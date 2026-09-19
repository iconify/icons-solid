import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teos6bbsl.css';
import '../../css/a/at11vggis.css';
import '../../css/s/s-klz88_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="teos6bbsl"/><path class="at11vggis"/><path class="s-klz88_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:ollama"} {...others} />);
}

export default Component;
