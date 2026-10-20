import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqivvfbyi.css';
import '../../css/z/z6525nbnq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aqivvfbyi"/><path class="z6525nbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-check-48-bold"} {...others} />);
}

export default Component;
