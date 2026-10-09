import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0ii7tboz.css';
import '../../css/e/elo702b0c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z0ii7tboz"/><path class="elo702b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cobalt-20"} {...others} />);
}

export default Component;
