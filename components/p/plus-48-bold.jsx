import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v71jzsb3t.css';
import '../../css/i/ilg_98b5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v71jzsb3t"/><path class="ilg_98b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plus-48-bold"} {...others} />);
}

export default Component;
