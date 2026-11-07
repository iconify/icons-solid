import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2z1e_f9o.css';
import '../../css/r/r79bbzbgk.css';
import '../../css/g/gsba024nu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2z1e_f9o"/><path class="r79bbzbgk"/><path class="gsba024nu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-close-bold-duotone"} {...others} />);
}

export default Component;
