import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3eoodb_u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l3eoodb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-up-outline"} {...others} />);
}

export default Component;
