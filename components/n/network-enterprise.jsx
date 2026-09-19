import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqioeeb_p.css';
import '../../css/r/r1w4d6azy.css';
import '../../css/n/n_x5vvvyy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pqioeeb_p"/><path class="r1w4d6azy"/><path class="n_x5vvvyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:network-enterprise"} {...others} />);
}

export default Component;
