import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xknpqhb_d.css';
import '../../css/e/eu8dnzbii.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="xknpqhb_d"/><path class="eu8dnzbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wenitor"} {...others} />);
}

export default Component;
