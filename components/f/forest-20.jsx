import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr3nhqbhi.css';
import '../../css/h/hf81d2y0d.css';
import '../../css/q/qkpwe6b5c.css';
import '../../css/g/g0ni6vb5b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xr3nhqbhi"/><path class="hf81d2y0d"/><path class="qkpwe6b5c"/><path class="g0ni6vb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forest-20"} {...others} />);
}

export default Component;
