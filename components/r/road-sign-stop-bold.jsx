import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcutg2b4x.css';
import '../../css/m/m5w08nblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcutg2b4x"/><path class="m5w08nblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-sign-stop-bold"} {...others} />);
}

export default Component;
