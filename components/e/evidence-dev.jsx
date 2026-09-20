import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozo9kkyme.css';

const viewBox = {"width":1080,"height":1080};
const content = `<path class="ozo9kkyme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:evidence-dev"} {...others} />);
}

export default Component;
