import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq491_u9m.css';
import '../../css/r/rjc2wjb6s.css';
import '../../css/b/bq3zunblc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wq491_u9m"/><path class="rjc2wjb6s"/><path class="bq3zunblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drum-20-bold"} {...others} />);
}

export default Component;
