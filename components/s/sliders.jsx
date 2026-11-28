import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vt_vge82q.css';
import '../../css/h/h3x0v4biq.css';
import '../../css/l/l0aldw27v.css';
import '../../css/v/v1j-mbbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vt_vge82q"/><circle class="h3x0v4biq"/><path class="l0aldw27v"/><circle class="v1j-mbbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sliders"} {...others} />);
}

export default Component;
