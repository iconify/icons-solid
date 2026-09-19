import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8rmcuiam.css';
import '../../css/j/jy4g_db5j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a8rmcuiam"/><circle class="jy4g_db5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:tag-stroke-16"} {...others} />);
}

export default Component;
