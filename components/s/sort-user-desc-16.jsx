import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at8zgcbxx.css';
import '../../css/i/ixft57bdo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="at8zgcbxx"/><path clip-rule="evenodd" class="ixft57bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-user-desc-16"} {...others} />);
}

export default Component;
