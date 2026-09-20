import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snhrnq68r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="snhrnq68r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cookcli-light"} {...others} />);
}

export default Component;
