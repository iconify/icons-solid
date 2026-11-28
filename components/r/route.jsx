import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vo8jwqa7q.css';
import '../../css/n/nn1ewrbff.css';
import '../../css/y/yaeyb-g4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><circle class="vo8jwqa7q"/><path class="nn1ewrbff"/><circle class="yaeyb-g4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:route"} {...others} />);
}

export default Component;
