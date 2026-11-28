import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z37f7-bek.css';
import '../../css/i/idily5riw.css';
import '../../css/y/yi7l4vbgw.css';
import '../../css/i/iagffughh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z37f7-bek"/><path class="idily5riw"/><path class="yi7l4vbgw"/><path class="iagffughh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:film"} {...others} />);
}

export default Component;
