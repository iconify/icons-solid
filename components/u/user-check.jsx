import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxc_0cc_z.css';
import '../../css/c/c47zhrbrd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zxc_0cc_z"/><path class="c47zhrbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:user-check"} {...others} />);
}

export default Component;
