import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6z4ynb6v.css';
import '../../css/j/jn-wlcb6l.css';
import '../../css/g/g1_-ymjuz.css';
import '../../css/u/uv1vhux9m.css';
import '../../css/o/omj-zju2r.css';
import '../../css/c/chb1o4b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="a6z4ynb6v"/><circle class="jn-wlcb6l"/><path class="g1_-ymjuz"/><circle class="uv1vhux9m"/><circle class="omj-zju2r"/><circle class="chb1o4b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fat"} {...others} />);
}

export default Component;
