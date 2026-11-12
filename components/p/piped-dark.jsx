import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le3-1wb0z.css';
import '../../css/k/kmpx0bclz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="le3-1wb0z"/><path class="kmpx0bclz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piped-dark"} {...others} />);
}

export default Component;
