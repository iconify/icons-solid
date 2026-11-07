import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lyjoipjzh.css';
import '../../css/s/sygmjqbiz.css';
import '../../css/b/b0ubx3bvg.css';
import '../../css/m/mzvd5t_pb.css';
import '../../css/c/cf_pz1hze.css';
import '../../css/a/ayck09-tp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="lyjoipjzh"/><path class="sygmjqbiz"/><path class="b0ubx3bvg"/><path class="mzvd5t_pb"/></g><g class="xtpeb-edw"><path class="lyjoipjzh"/><path class="sygmjqbiz"/></g><path class="cf_pz1hze"/><path class="ayck09-tp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-bold-duotone"} {...others} />);
}

export default Component;
