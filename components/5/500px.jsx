import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gftmt4b9r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gftmt4b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:500px"} {...others} />);
}

export default Component;
