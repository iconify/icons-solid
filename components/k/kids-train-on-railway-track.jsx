import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgxhaab5x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mgxhaab5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:kids-train-on-railway-track"} {...others} />);
}

export default Component;
