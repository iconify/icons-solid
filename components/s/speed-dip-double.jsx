import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kywr7xg6l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kywr7xg6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:speed-dip-double"} {...others} />);
}

export default Component;
