import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d88tubblx.css';
import '../../css/a/a3i1g1emt.css';
import '../../css/q/qayriggpe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d88tubblx"/><path class="a3i1g1emt"/><path class="qayriggpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cell-48"} {...others} />);
}

export default Component;
