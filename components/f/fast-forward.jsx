import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjbibb21a.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qjbibb21a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:fast-forward"} {...others} />);
}

export default Component;
