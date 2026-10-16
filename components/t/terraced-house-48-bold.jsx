import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgmleib2q.css';
import '../../css/l/lw9-dbcju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vgmleib2q"/><path class="lw9-dbcju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terraced-house-48-bold"} {...others} />);
}

export default Component;
