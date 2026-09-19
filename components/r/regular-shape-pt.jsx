import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8lam-buj.css';
import '../../css/c/cyt_a1kut.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="s8lam-buj"/><path class="cyt_a1kut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:regular-shape-pt"} {...others} />);
}

export default Component;
