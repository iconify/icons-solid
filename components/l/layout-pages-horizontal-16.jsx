import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsehh6bxi.css';
import '../../css/q/q3ku_gbpq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tsehh6bxi"/><path class="q3ku_gbpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-pages-horizontal-16"} {...others} />);
}

export default Component;
