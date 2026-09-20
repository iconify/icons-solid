import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe8xt8c8f.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="fe8xt8c8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:casino"} {...others} />);
}

export default Component;
