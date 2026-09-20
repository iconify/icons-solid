import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzzlwulho.css';
import '../../css/u/u9tqtbb-f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tzzlwulho"/><path class="u9tqtbb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-parchment-16"} {...others} />);
}

export default Component;
