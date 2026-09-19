import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdfa1mbde.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="hdfa1mbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:camera-retro"} {...others} />);
}

export default Component;
