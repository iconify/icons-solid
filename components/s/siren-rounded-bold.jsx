import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kek-0ac7m.css';
import '../../css/r/rqbzrccbz.css';
import '../../css/c/ce-i1mh_z.css';
import '../../css/u/uljji2but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kek-0ac7m"/><path clip-rule="evenodd" class="rqbzrccbz"/><path class="ce-i1mh_z"/><path class="uljji2but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-bold"} {...others} />);
}

export default Component;
