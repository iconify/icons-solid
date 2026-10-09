import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_2io1bvz.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/o/o2ojfkh6m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b_2io1bvz"/><path class="tr-eedcjf"/><path class="o2ojfkh6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-tent-48-bold"} {...others} />);
}

export default Component;
