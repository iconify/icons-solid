import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb5g8bpa.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="rnb5g8bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:wall-front-gate"} {...others} />);
}

export default Component;
