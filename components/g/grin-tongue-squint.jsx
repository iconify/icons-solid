import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w73dwwb3g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w73dwwb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:grin-tongue-squint"} {...others} />);
}

export default Component;
