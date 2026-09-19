import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w__re01gs.css';
import '../../css/c/ctx28g1ir.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="w__re01gs"/><path class="ctx28g1ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:search-fill-16"} {...others} />);
}

export default Component;
