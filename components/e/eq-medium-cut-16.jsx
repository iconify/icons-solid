import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaa78ubuz.css';
import '../../css/a/a97bmzw_z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yaa78ubuz"/><path class="a97bmzw_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eq-medium-cut-16"} {...others} />);
}

export default Component;
