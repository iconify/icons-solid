import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ramklfbpo.css';
import '../../css/s/s2ay7ubwo.css';
import '../../css/k/k3_giy35l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ramklfbpo"/><path class="s2ay7ubwo"/><path class="k3_giy35l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:trash"} {...others} />);
}

export default Component;
