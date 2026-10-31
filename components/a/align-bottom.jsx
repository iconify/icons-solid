import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qfdjv1boa.css';
import '../../css/v/vndnz_y3s.css';
import '../../css/v/v_ui7pbkk.css';
import '../../css/d/dqt-8mv4w.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qfdjv1boa"/><path class="vndnz_y3s wm-shine"/><path class="v_ui7pbkk wm-k"/><path class="dqt-8mv4w wm-a"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:align-bottom"} {...others} />);
}

export default Component;
