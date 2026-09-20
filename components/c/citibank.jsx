import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdp0wccxg.css';
import '../../css/q/q8saz_b2a.css';

const viewBox = {"width":300,"height":194.955};
const content = `<path class="jdp0wccxg"/><path class="q8saz_b2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:citibank"} {...others} />);
}

export default Component;
