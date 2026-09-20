import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrbv2j1ga.css';
import '../../css/q/qtl0jcblb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xrbv2j1ga"/><path class="qtl0jcblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:meter-low-16"} {...others} />);
}

export default Component;
