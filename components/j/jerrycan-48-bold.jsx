import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuk06n_9z.css';
import '../../css/n/ny6l1ubqo.css';
import '../../css/n/n82309b_n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uuk06n_9z"/><path class="ny6l1ubqo"/><path class="n82309b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jerrycan-48-bold"} {...others} />);
}

export default Component;
