import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh9jl8b2r.css';
import '../../css/g/gis6lfbgu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qh9jl8b2r"/><path class="gis6lfbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eq-high-boost-16"} {...others} />);
}

export default Component;
