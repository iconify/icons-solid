import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1ds-6sfp.css';
import '../../css/p/p_sp1no_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1ds-6sfp"/><path clip-rule="evenodd" class="p_sp1no_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-ranking-desc-24"} {...others} />);
}

export default Component;
