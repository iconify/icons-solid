import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cisvadb6a.css';
import '../../css/y/y-864bbjp.css';
import '../../css/v/v71jzsb3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cisvadb6a"/><path class="y-864bbjp"/><path class="v71jzsb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:double-glazing-48-bold"} {...others} />);
}

export default Component;
