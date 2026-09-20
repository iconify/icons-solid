import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecq0j7s0z.css';
import '../../css/g/g1qip2epf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ecq0j7s0z"/><path clip-rule="evenodd" class="g1qip2epf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:character-map-16"} {...others} />);
}

export default Component;
