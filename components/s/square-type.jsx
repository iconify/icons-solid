import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/d/d0qdg3dzf.css';
import '../../css/x/xxgdw-btn.css';
import '../../css/f/fkpiqrb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lk2gmgbqk"/><path class="d0qdg3dzf"/><path class="xxgdw-btn"/><path class="fkpiqrb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-type"} {...others} />);
}

export default Component;
