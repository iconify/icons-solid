import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6og01bov.css';
import '../../css/r/riwyopb4m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6og01bov"/><path class="riwyopb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:negative-price-20"} {...others} />);
}

export default Component;
