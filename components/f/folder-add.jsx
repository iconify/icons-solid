import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrtzwyj8v.css';
import '../../css/i/iiwuq1b9e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lrtzwyj8v"/><path class="iiwuq1b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:folder-add"} {...others} />);
}

export default Component;
