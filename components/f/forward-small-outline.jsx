import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp4s3mbkg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yp4s3mbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:forward-small-outline"} {...others} />);
}

export default Component;
