import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik-i4x10n.css';
import '../../css/c/chowghc9o.css';
import '../../css/s/s9kf_ac-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik-i4x10n"/><path class="chowghc9o"/><path class="s9kf_ac-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:balance-duotone"} {...others} />);
}

export default Component;
