import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0d4p95pm.css';

const viewBox = {"width":1411,"height":1557};
const content = `<path class="y0d4p95pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:ubs-etracs"} {...others} />);
}

export default Component;
