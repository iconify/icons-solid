import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd4yuk13a.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="fd4yuk13a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:art-gallery-11"} {...others} />);
}

export default Component;
