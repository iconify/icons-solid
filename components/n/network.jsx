import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rriodnwoz.css';
import '../../css/r/r1y0urzis.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rriodnwoz"/><circle class="r1y0urzis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:network"} {...others} />);
}

export default Component;
