import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuil0dbas.css';
import '../../css/d/dzyouclrc.css';
import '../../css/c/cum2y9o2v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zuil0dbas"/><path class="dzyouclrc"/><path class="cum2y9o2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:not-gate-20-bold"} {...others} />);
}

export default Component;
