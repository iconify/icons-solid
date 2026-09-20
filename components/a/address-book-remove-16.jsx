import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx1ebmbsz.css';
import '../../css/c/cic6sccqj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kx1ebmbsz"/><path class="cic6sccqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:address-book-remove-16"} {...others} />);
}

export default Component;
