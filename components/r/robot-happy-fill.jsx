import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkg_txz7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkg_txz7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:robot-happy-fill"} {...others} />);
}

export default Component;
