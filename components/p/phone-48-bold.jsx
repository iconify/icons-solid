import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr0t56j8f.css';
import '../../css/v/vqxkeugkg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sr0t56j8f"/><path class="vqxkeugkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-48-bold"} {...others} />);
}

export default Component;
