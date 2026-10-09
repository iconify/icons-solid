import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_de_rbqi.css';
import '../../css/s/szwh8_usw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v_de_rbqi"/><path class="szwh8_usw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-down-48"} {...others} />);
}

export default Component;
