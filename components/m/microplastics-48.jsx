import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja4f5ybie.css';
import '../../css/u/ug7yt43lf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ja4f5ybie"/><path class="ug7yt43lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microplastics-48"} {...others} />);
}

export default Component;
