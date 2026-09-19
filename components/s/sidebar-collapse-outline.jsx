import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q61-t8b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q61-t8b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:sidebar-collapse-outline"} {...others} />);
}

export default Component;
