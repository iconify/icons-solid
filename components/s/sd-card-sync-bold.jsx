import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxevvmbhb.css';
import '../../css/p/p1v655b3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxevvmbhb"/><path class="p1v655b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sd-card-sync-bold"} {...others} />);
}

export default Component;
