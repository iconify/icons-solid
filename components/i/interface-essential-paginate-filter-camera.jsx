import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk57eh2ic.css';
import '../../css/r/rxb3jdv2n.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kk57eh2ic"/><path class="rxb3jdv2n"/><path class="yipyoybdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-paginate-filter-camera"} {...others} />);
}

export default Component;
