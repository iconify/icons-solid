import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu4y7jb0r.css';
import '../../css/e/etdcedcfw.css';
import '../../css/g/gg2u61y6d.css';
import '../../css/e/e88ivvz4f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iu4y7jb0r"/><path class="etdcedcfw"/><path class="gg2u61y6d"/><path class="e88ivvz4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:person-walking-20-bold"} {...others} />);
}

export default Component;
