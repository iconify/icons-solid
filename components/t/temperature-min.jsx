import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn6481bwr.css';
import '../../css/p/pxkrmsbhi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rn6481bwr"/><path class="pxkrmsbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-min"} {...others} />);
}

export default Component;
