import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hdbo47bvw.css';
import '../../css/s/sj79gqg8h.css';
import '../../css/c/cw7--kf9r.css';
import '../../css/h/hqk9m8ngc.css';
import '../../css/m/mo3pxd2af.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path clip-rule="evenodd" class="hdbo47bvw"/><path clip-rule="evenodd" class="sj79gqg8h"/><path class="cw7--kf9r"/><path class="hqk9m8ngc"/><path class="mo3pxd2af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radar"} {...others} />);
}

export default Component;
