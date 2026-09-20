import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l16sp9c4r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l16sp9c4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:digital-tachograph"} {...others} />);
}

export default Component;
