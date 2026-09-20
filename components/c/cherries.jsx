import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uglnbob5i.css';
import '../../css/z/z9q0luits.css';
import '../../css/e/e-kotjmah.css';
import '../../css/s/stadvxefh.css';
import '../../css/o/ok0cq_5ou.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="uglnbob5i"/><path class="z9q0luits"/><path class="e-kotjmah"/><path class="stadvxefh"/><path class="ok0cq_5ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cherries"} {...others} />);
}

export default Component;
