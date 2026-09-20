import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itl92zjdi.css';
import '../../css/r/rtxfoabgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="itl92zjdi"/><path class="rtxfoabgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-2-bold"} {...others} />);
}

export default Component;
