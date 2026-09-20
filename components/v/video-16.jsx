import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic8i36t6o.css';
import '../../css/o/o1kf6m42c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ic8i36t6o"/><path class="o1kf6m42c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:video-16"} {...others} />);
}

export default Component;
