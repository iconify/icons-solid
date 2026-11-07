import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6evqk7gs.css';
import '../../css/a/a7r2o1pkb.css';
import '../../css/u/uj188tbka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6evqk7gs"/><path clip-rule="evenodd" class="a7r2o1pkb"/><path class="uj188tbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-bold-duotone"} {...others} />);
}

export default Component;
