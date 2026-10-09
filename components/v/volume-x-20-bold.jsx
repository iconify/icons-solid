import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvsucgsri.css';
import '../../css/b/bfzo5mbpj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bvsucgsri"/><path class="bfzo5mbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-x-20-bold"} {...others} />);
}

export default Component;
