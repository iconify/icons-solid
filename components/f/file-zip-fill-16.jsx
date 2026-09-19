import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_mo4xl-o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r_mo4xl-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-zip-fill-16"} {...others} />);
}

export default Component;
