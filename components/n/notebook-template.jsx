import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrk_kpbxl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zrk_kpbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:notebook-template"} {...others} />);
}

export default Component;
