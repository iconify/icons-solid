import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuw044e9p.css';
import '../../css/g/ghm7_z0ly.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nuw044e9p"/><path class="ghm7_z0ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-pages-wrap-16"} {...others} />);
}

export default Component;
