import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joot-gj4s.css';
import '../../css/m/mdm2icu2v.css';
import '../../css/o/oc6ekbbrh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="joot-gj4s"/><path clip-rule="evenodd" class="mdm2icu2v"/><path class="oc6ekbbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sort-alpha-asc-16"} {...others} />);
}

export default Component;
