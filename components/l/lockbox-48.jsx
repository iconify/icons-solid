import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba29q_65m.css';
import '../../css/f/f1favznrw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ba29q_65m"/><path class="f1favznrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockbox-48"} {...others} />);
}

export default Component;
