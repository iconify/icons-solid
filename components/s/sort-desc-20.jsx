import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh02dzb5a.css';
import '../../css/u/ufrf-lbjb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rh02dzb5a"/><path class="ufrf-lbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-desc-20"} {...others} />);
}

export default Component;
