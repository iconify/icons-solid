import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilg_98b5z.css';
import '../../css/r/r9g8q-bah.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ilg_98b5z"/><path class="r9g8q-bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-48-bold"} {...others} />);
}

export default Component;
