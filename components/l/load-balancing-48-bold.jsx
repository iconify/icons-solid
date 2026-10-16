import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo0xevpbl.css';
import '../../css/b/b9o66unef.css';
import '../../css/z/zw7micchl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eo0xevpbl"/><path class="b9o66unef"/><path class="zw7micchl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-balancing-48-bold"} {...others} />);
}

export default Component;
