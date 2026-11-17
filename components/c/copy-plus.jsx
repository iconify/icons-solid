import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h_-eqwb7k.css';
import '../../css/u/u3pid77re.css';
import '../../css/a/af9umnbdl.css';
import '../../css/h/hzp8rhu1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h_-eqwb7k"/><path class="u3pid77re"/><path class="af9umnbdl"/><path class="hzp8rhu1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:copy-plus"} {...others} />);
}

export default Component;
