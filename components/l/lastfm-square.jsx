import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9i9g-hcj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v9i9g-hcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:lastfm-square"} {...others} />);
}

export default Component;
