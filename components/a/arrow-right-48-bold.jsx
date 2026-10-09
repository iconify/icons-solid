import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilg_98b5z.css';
import '../../css/z/z5ckwp2dk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ilg_98b5z"/><path class="z5ckwp2dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-48-bold"} {...others} />);
}

export default Component;
