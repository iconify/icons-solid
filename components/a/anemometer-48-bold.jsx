import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhvqtnbfx.css';
import '../../css/u/un5h_vbqq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uhvqtnbfx"/><path class="un5h_vbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anemometer-48-bold"} {...others} />);
}

export default Component;
