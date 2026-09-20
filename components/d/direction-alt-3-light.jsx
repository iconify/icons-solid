import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/b3tg1bi3m.css';
import '../../css/h/hwwubw2ud.css';
import '../../css/o/o6g7n3blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="b3tg1bi3m"/><path class="hwwubw2ud"/><path class="o6g7n3blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-3-light"} {...others} />);
}

export default Component;
