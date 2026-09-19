import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a4fdwuw2l.css';
import '../../css/q/qjeqtgb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="a4fdwuw2l"/><path class="qjeqtgb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:flag"} {...others} />);
}

export default Component;
