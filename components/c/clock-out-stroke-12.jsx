import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1qje2naz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a1qje2naz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clock-out-stroke-12"} {...others} />);
}

export default Component;
