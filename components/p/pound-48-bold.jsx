import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_2pqsbdw.css';
import '../../css/e/et2f85cnx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j_2pqsbdw"/><path class="et2f85cnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pound-48-bold"} {...others} />);
}

export default Component;
