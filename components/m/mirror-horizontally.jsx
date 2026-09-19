import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl_cg_blc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zl_cg_blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:mirror-horizontally"} {...others} />);
}

export default Component;
