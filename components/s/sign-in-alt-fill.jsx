import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpanu3zmm.css';
import '../../css/m/mqcc82bag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpanu3zmm"/><path class="mqcc82bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:sign-in-alt-fill"} {...others} />);
}

export default Component;
