import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjsousb0m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eq99g89vg.css';
import '../../css/h/he_l--bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sjsousb0m"/><g class="dt0cm9dhy primary"><path class="eq99g89vg"/><path class="he_l--bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:x-twitter-duo"} {...others} />);
}

export default Component;
