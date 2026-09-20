import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5npjlsdw.css';
import '../../css/v/v_drcnb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5npjlsdw"/><path class="v_drcnb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-broadcast-advertising-monitor-megaphone-bold"} {...others} />);
}

export default Component;
