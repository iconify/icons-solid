import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv56ohh-o.css';
import '../../css/j/jf6r4n4lm.css';
import '../../css/b/bcf5uus5m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iv56ohh-o"/><path class="jf6r4n4lm"/><path class="bcf5uus5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yoga-20"} {...others} />);
}

export default Component;
